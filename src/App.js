import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Navbar } from "./Components/Navbar";
import { getToken } from "./api/storage";
import UserContext from "./context/userContext";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className=" h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Home" Component={Home} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
