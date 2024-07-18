import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Navbar } from "./Components/Navbar";
import { getToken } from "./api/storage";
import UserContext from "./context/userContext";
import Events from "./pages/Events";
import { AllUsers } from "./pages/AllUsers";
import { Orgnaization } from "./pages/Orgnaization";
import Donations from "./pages/Donations";
import Reports from "./pages/Reports";
import Receivers from "./pages/Receivers";

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
          <Route path="/Events" Component={Events} />
          <Route path="/allusers" Component={AllUsers} />
          <Route path="/organization" Component={Orgnaization} />
          <Route path="/donations" Component={Donations} />
          <Route path="/reports" Component={Reports} />
          <Route path="/receivers" Component={Receivers} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
