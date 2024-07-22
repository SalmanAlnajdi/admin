import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUsers } from "../api/users";
import UserItem from "../Components/UserItem";

export const AllUsers = () => {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
  const usersList = data?.map((user) => (
    <UserItem user={user} key={user.username} />
  ));

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center p-3">
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {usersList}
      </div>
    </div>
  );
};
