import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { getUserById, deleteUser } from "../api/users";

import { BASE_URL } from "../api";

const UserItem = ({ user }) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["user", user?._id],
    queryFn: () => getUserById(user?._id),
  });
  const navegation = useNavigate();
  const handelDelete = async () => {
    await deleteUser(user._id);
    queryClient.invalidateQueries("users");
  };
  const handelNavegation = () => {
    navegation(`/user/myprofile/${user._id}`);
  };
  return (
    <div className=" flex flex-row">
      <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
        <h1 className="text-md font-bold">{user.username}</h1>
        <img
          src={
            data?.image
              ? `http://localhost:8000/${data.images}`
              : `https://via.placeholder.com/200/000000?`
          }
          alt={`${user.username}-image`}
          className="w-[200px] rounded-md
      "
        />
        <button
          onClick={handelDelete}
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
        >
          delete
        </button>
        <Link to={`/user/myprofile/${user._id}`}>
          <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
