import React, { useContext } from "react";
import HomeSVG from "../Svgs/HomeSVG";
import EventSVG from "../Svgs/EventSVG";
import VolinterSVG from "../Svgs/VolinterSVG";
import AddEventSVG from "../Svgs/AddEventSVG";
import LogoutSVG from "../Svgs/LogoutSVG";
import { useLocation, useNavigate } from "react-router-dom";
import { removeToken } from "../api/storage";
import AppContext from "../context/AppContext";

const menuItems = [
  { name: "Home", icon: <HomeSVG />, path: "/" },
  { name: "Events", icon: <EventSVG />, path: "/events" },
  { name: "Volunteers", icon: <VolinterSVG />, path: "/volunteers" },
  { name: "Create Event", icon: <AddEventSVG />, path: "/create" },
  { name: "Logout", icon: <LogoutSVG />, path: "/logout" },
];

const SideBar = ({ toggleSidebar, isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const { setApp } = useContext(AppContext);

  const handleNavigate = (path) => {
    if (path === "/logout") {
      removeToken();
      setApp((prevApp) => ({ ...prevApp, user: false }));
    } else {
      navigate(path);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-2 relative">
      {menuItems.map((menuItem, index) => (
        <SideBarItem
          key={index}
          onClick={() => handleNavigate(menuItem.path)}
          pathname={pathname}
          menuItem={menuItem}
          isOpen={isOpen}
          isLast={menuItems.length - 1 === index}
        />
      ))}
    </div>
  );
};

const SideBarItem = ({
  menuItem,
  isOpen,
  isLast,
  pathname,
  onClick = () => {},
}) => {
  return (
    <div>
      <div
        onClick={onClick}
        className={`w-full h-[75px] cursor-pointer justify-center items-center flex ${
          isLast && "absolute bottom-0"
        }`}
      >
        <div
          className={`w-[80%] rounded-[12px] h-[70%] flex justify-center items-center ${
            menuItem.path === pathname && "bg-[#27292CC4]"
          }`}
        >
          {!isOpen && (
            <div
              className={`h-[50%] ${
                isLast ? "w-[100%] justify-center items-center flex" : "w-[50%]"
              }`}
            >
              {menuItem.icon}
            </div>
          )}
          {isOpen && (
            <div className="w-full h-full items-center flex justify-start gap-5 pl-3 pr-3">
              <div className="w-[40px] aspect-square">{menuItem.icon}</div>
              <div className="text-[18px] text-white">{menuItem.name}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
