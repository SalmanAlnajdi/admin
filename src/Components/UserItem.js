import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { getUserById, deleteUser, updateUser } from "../api/users";
import { useState } from "react";
import Modal from "./Modal";
import { useMutation } from "@tanstack/react-query";

const UserItem = ({ user }) => {
  // const { data } = useQuery({
  //   queryKey: ["user", user?._id],
  //   queryFn: () => getUserById(user?._id),
  // });
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState({
    id: user._id,
  });
  const queryClient = useQueryClient();
  const navegation = useNavigate();
  const handelDelete = async () => {
    await deleteUser(user._id);
    queryClient.invalidateQueries(["users"]);
  };
  const handelNavegation = () => {
    navegation(`/user/myprofile/${user._id}`);
  };
  const { mutate } = useMutation({
    mutateKey: ["editUser", user._id],
    mutationFn: () => updateUser(editUser),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      setShowModal(false);
    },
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setEditUser({ ...editUser, [e.target.name]: [e.target.files[0]] });
    } else {
      setEditUser({ ...editUser, [e.target.name]: e.target.value });
    }
  };
  return (
    <div className=" flex flex-row">
      <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
        <h1 className="text-md font-bold">{user.username}</h1>
        <img
          src={
            user?.image
              ? `http://localhost:8000/${user.images}`
              : `https://via.placeholder.com/200/000000?`
          }
          alt={`${user.username}-image`}
          className="w-[200px] rounded-md
      "
        />
        <button
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Edit
        </button>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h3>Edit Profile</h3>
          <input
            type="text"
            name="username"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            placeholder="image"
            onChange={handleChange}
          />
          <button onClick={mutate}>Save</button>
        </Modal>
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
