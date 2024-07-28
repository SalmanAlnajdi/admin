import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getOrgById, deleteOrgById } from "../api/orgnaizationApi";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { updateOrgById } from "../api/orgnaizationApi";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const OrgItem = ({ org }) => {
  const [showModal, setShowModal] = useState(false);
  const [editOrg, setEditOrg] = useState({});
  const { data } = useQuery({
    queryKey: ["organization", org?._id],
    queryFn: () => getOrgById(org?._id),
  });
  const { mutate } = useMutation({
    mutateKey: ["editOrganization", org._id],
    mutationFn: () => updateOrgById(org._id, editOrg),
  });
  const navegation = useNavigate();
  const queryClient = useQueryClient();
  const handelDelete = async () => {
    await deleteOrgById(org?._id);
    queryClient.invalidateQueries(["organization"]);
  };

  const handelNavegation = () => {
    navegation(`/organization/profile:${org._id}`);
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setEditOrg({ ...editOrg, [e.target.name]: [e.target.files[0]] });
    } else {
      setEditOrg({ ...editOrg, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
        <h1 className="text-md font-bold">{org.username}</h1>
        <h1 className="text-md font-bold"> email: {org.email}</h1>
        <h1 className="text-md font-bold"> phone: {org.phone}</h1>
        <img
          src={
            data?.image
              ? `http://localhost:8000/${data.image}`
              : `https://via.placeholder.com/200/000000?`
          }
          alt={`${org.username}-image`}
          className="w-[200px] rounded-md
      "
        />
        <Link to={`/organization/profile/${org._id}`}>
          <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
            View
          </button>
        </Link>
        <button
          className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black flex justify-center items-center bg-green-400 hover:bg-green-600"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Edit
        </button>
        <button
          className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black flex justify-center items-center bg-red-400 hover:bg-red-600"
          onClick={handelDelete}
        >
          delete
        </button>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h3>Edit Profile</h3>
          <input
            type="text"
            name="username"
            placeholder="username"
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
      </div>
    </div>
  );
};

export default OrgItem;
