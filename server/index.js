const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
var someObject = require("./db.json");
var dashObject = require("./dashboard.json");

const userdb = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jsonServer.defaults());

const SECRET_KEY = "72676376";
const expiresIn = "1h";

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email == email && user.password === password
    ) !== -1
  );
}

app.post("/api/auth/register", (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password })) {
    const status = 401;
    const message = "Email and Password already exist";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    let last_item_id = data.users[data.users.length - 1].id;

    data.users.push({ id: last_item_id + 1, email: email, password: password });
    let writeData = fs.writeFile(
      "./users.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!isAuthenticated({ email, password })) {
    const status = 401;
    const message = "Incorrect login and password";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/infos", (req, res) => {
  //let a = "example"
  res.send(someObject.infos);
});

app.get("/dashboard", (req, res) => {
  //let a = "example"
  res.send(dashObject.dashboard);
});

app.post("/infos", (req, res) => {
  const { id, Name, Price, Shop_Address } = req.body;

  fs.readFile("./db.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());

    let last_item_id = data.infos[data.infos.length - 1].id;

    data.infos.push({
      id: last_item_id + 1,
      Name: Name,
      Price: Price,
      Shop_Address: Shop_Address,
    });
    let writeData = fs.writeFile(
      "./db.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  const newBook = {
    id: req.body.id,
    Name: req.body.Name,
    Price: req.body.Price,
    Shop_Address: req.body.Shop_Address,
  };
  
  res.status(201).send(newBook);
});

app.delete("/infos/:id", function (req, res) {
  var id = req.params.id;

  fs.readFile("./db.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());

    for (var i = 0; i < data.infos.length; i++) {
      if (data.infos[i].id === id) {
        console.log(data.infos[i]);
        data.infos.splice(i, 1);
      }
    }
    let writeData = fs.writeFile(
      "./db.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
    res.status(200).send(id);
  });
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));