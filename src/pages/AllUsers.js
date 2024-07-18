import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUsers } from "../api/users";

export const AllUsers = () => {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
  const usersList = data?.map((user) => (
    <div
      key={user._id}
      className="bg-white p-5 rounded-md shadow-md flex flex-col items-center justify-center gap-3"
    >
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user._id}</h1>
    </div>
  ));

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="bg-green-400 w-full h-full flex flex-wrap gap-3 justify-center items-center">
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {usersList}
      </div>
    </div>
  );
};
