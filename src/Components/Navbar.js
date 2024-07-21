import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { removeToken } from "../api/storage";
import Button from "./Button";
import { LogOut } from "./LogOut";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const nav = useNavigate();
  const handleLogOut = () => {
    removeToken();
    setUser(false);
    nav("/Login");
  };
  return (
    <div className="w-full flex justify-around">
      <div className="flex gap-3 justify-center items-center ">
        <Button Button={"Home"} />
      </div>
      <div onClick={handleLogOut}>
        <LogOut logOut={"logOut"} />
      </div>
    </div>
  );
};
