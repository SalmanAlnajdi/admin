import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/users";
import { BASE_URL } from "../api";

const UserDetail = () => {
  const { id } = useParams();

  const { data: userData = {} } = useQuery({
    queryKey: ["user", id._id],
    queryFn: () => getUserById(id),
  });
  return (
    <div className="w-full h-full bg-slate-400 flex justify-center">
      <div>
        <h1>Name: {userData?.name}</h1>
        <h1>E-mail: {userData?.email}</h1>
        <h1>phone: {userData?.phone}</h1>
        <h1>role: {userData?.role}</h1>
        <h1>id: {userData?._id}</h1>
        <h1>username: {userData?.username}</h1>
        <img
          src={BASE_URL + "/" + userData?.image}
          alt={`${userData?.username}-image`}
          className="w-[200px] rounded-md"
        />
      </div>
    </div>
  );
};

export default UserDetail;
