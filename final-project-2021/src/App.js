import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import VideoCon from "./Components/VideoCon";
import Todos from "./Components/Todos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginApp from "./Components/LoginApp";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <LandingPage />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/videocon" element={<VideoCon />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
