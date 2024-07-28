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

import { OrgDetails } from "./Components/OrgDetails";
import { Regester } from "./pages/Regester";

import UserContext from "./context/userContext";
import { getToken } from "./api/storage";
import EventDetails from "./Components/EventDetails";
import UserDetail from "./Components/UserDetail";
import DonationDetails from "./Components/donationsDetails";
import ReceiversPage from "./pages/ReceiversPage";

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
          <Route path="/eventbyid/:id" Component={EventDetails} />
          <Route path="/allusers" Component={AllUsers} />
          <Route path="/user/myprofile/:id" Component={UserDetail} />
          <Route path="/organization/" Component={Orgnaization} />
          <Route path="/organization/profile/:id" Component={OrgDetails} />
          <Route path="/donations" Component={Donations} />
          <Route path="/donations/:id" Component={DonationDetails} />
          <Route path="/receivers" Component={ReceiversPage} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
