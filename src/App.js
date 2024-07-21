import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Navbar } from "./Components/Navbar";
import Events from "./pages/Events";
import { AllUsers } from "./pages/AllUsers";
import { Orgnaization } from "./pages/Orgnaization";
import Donations from "./pages/Donations";
import Reports from "./pages/Reports";
import Receivers from "./pages/Receivers";
import { OrgDetails } from "./Components/OrgDetails";
import { Regester } from "./pages/Regester";
import userContext from "./context/userContext";
import UserContext from "./context/userContext";
import { getToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  }, []);
  const hideNavbarRoutes = ["/Login", "/"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className=" h-screen flex flex-col">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" Component={Regester} />
          <Route path="/Login" Component={Login} />
          <Route path="/Home" Component={Home} />
          <Route path="/Events" Component={Events} />
          <Route path="/allusers" Component={AllUsers} />
          <Route path="/organization/" Component={Orgnaization} />
          <Route path="/organization/profile" component={OrgDetails} />
          <Route path="/donations" Component={Donations} />
          <Route path="/reports" Component={Reports} />
          <Route path="/receivers" Component={Receivers} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
