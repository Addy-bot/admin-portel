import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import api from "../api/Products";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Register = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    api
      .post("/api/auth/register", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        navigate("/login");
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div
      className="ui card"
      style={{
        marginTop: "60px",
        marginLeft: "450px",
        backgroundColor: "#F4A442",
        borderStyle: "ridge",
        borderWidth: "5px",
        borderColor: "black",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
      }}
    >
      <div style={{ padding: "50px" }}>
        <h2>Register Page</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={register}
        >
          <TextField
            id="username"
            label="Username"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button
            style={{ width: "100px", marginLeft: "50px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
