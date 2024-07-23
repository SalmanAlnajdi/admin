import React from "react";
import AdminCategory from "../Components/AdminCategory";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-green-400 w-full h-full flex flex-wrap gap-3 justify-center items-center">
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
