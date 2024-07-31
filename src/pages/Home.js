import React from "react";
import AdminCategory from "../Components/AdminCategory";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full  min-w-[26rem] bg-[#323048] relative p-[0.875rem] rounded-[0.625rem] h-[24.25rem] max-w-[80.5rem]  lg:w-full flex flex-col lg:flex-row gap-[0.875rem]">
      <Link to="/Events">
        <AdminCategory name={"Events"} information={"for more information"} />
      </Link>
      <Link to="/allusers">
        <AdminCategory name={"Users"} information={"see all users"} />
      </Link>
      <Link to="/organization/">
        <AdminCategory
          name={"Organization"}
          information={"view organizations"}
        />
      </Link>
      <Link to="/donations">
        <AdminCategory name={"Donations"} information={"view all donations"} />
      </Link>
      <Link to="/receivers">
        <AdminCategory name={"Receivers"} information={"view all Receivers"} />
      </Link>
    </div>
  );
};

export default Home;
