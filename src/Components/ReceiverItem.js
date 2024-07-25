import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteReceiverById, updateReceiverById } from "../api/Recevier";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ReceiverItem = ({ receiver }) => {
  const [editReceiver, setEditReceiver] = useState({});
  // console.log("Receiver Data:", receiver);
  const [showModal, setShowModal] = useState(false);

  const queryClient = useQueryClient();
  const navegation = useNavigate();
  const getAllReceivers = async () => {
    await getAllReceivers(receiver?._id);
    queryClient.invalidateQueries(["receivers"]);
  };
  const { mutate } = useMutation({
    mutateKey: ["editReceivers", receiver?._id],
    mutationFn: () =>
      updateReceiverById(
        receiver?._id,
        editReceiver.name,
        editReceiver.email,
        editReceiver.phone,
        editReceiver.city
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["receivers"]);
      setShowModal(false);
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setEditReceiver({
        ...editReceiver,
        [e.target.name]: [e.target.files[0]],
      });
    } else {
      setEditReceiver({ ...editReceiver, [e.target.name]: e.target.value });
    }
  };
  const handelDelete = async () => {
    await deleteReceiverById(receiver._id);
    queryClient.invalidateQueries(["receivers"]);
  };

  return (
    <div className="flex flex-row">
      <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
        <h1 className="text-md font-bold">{receiver?.name}</h1>
        <h1 className="text-md font-bold">{receiver?.phone}</h1>
        <h1 className="text-md font-bold">{receiver?.location}</h1>
        <h1 className="text-md font-bold">{receiver?.city}</h1>
        <button
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Edit
        </button>

        <button
          onClick={handelDelete}
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
        >
          delete
        </button>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h3>Edit Profile</h3>
          <input
            type="text"
            name="name"
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
            text="text"
            name="city"
            placeholder="city"
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

export default ReceiverItem;
