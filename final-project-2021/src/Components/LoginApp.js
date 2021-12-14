import React, { useState } from "react";
import Login from "./Login";

function LoginApp() {
  const [logoutUser, setLogoutUser] = useState(false);

  return (
    <div className="App">
      <Login setLogoutUser={setLogoutUser} />
    </div>
  );
}

export default LoginApp;
