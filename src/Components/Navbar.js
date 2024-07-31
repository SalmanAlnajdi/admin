import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { removeToken } from "../api/storage";
import Button from "./Button";
import { LogOut } from "./LogOut";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ toggleSidebar }) => {
  const [user, setUser] = useContext(UserContext);
  const nav = useNavigate();
  const handleLogOut = () => {
    removeToken();
    setUser(false);
    nav("/Login");
  };
  const handleHome = () => {
    nav("/Home");
  };
  return (
    <div className="bg-gray-800 w-full flex justify-around items-center text-white">
      <button
        onClick={toggleSidebar}
        className=" text-white focus:outline-none relative"
      ></button>
      <div className="flex items-center space-x-2 text-white ">
        <input
          type="checkbox"
          className="form-checkbox bg-gray-700 border-gray-600 rounded focus:ring-transparent focus:ring-offset-0"
        />
        <span className="text-purple-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.75v14.5M8.75 10.75L12 7.25m0 0l3.25 3.5M8.75 13.25l3.25-3.5m0 0l3.25 3.5"
            />
          </svg>
          Events
        </span>
        <span>/</span>
        <span>Edit</span>
      </div>
      <div
        className="flex gap-3 justify-center items-center "
        onClick={handleHome}
      >
        <Button Button={"Home"} />
      </div>
      <div onClick={handleLogOut}>
        <LogOut logOut={"logOut"} />
      </div>
    </div>
  );
};
