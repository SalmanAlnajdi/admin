import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="login" Component={Login} />
    </Routes>
  );
}

export default App;
