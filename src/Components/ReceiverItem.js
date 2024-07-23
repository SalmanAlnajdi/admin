import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllReceivers } from "../api/Recevier";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReceiverItem = ({ receiver }) => {
  console.log("Receiver Data:", receiver);
  const [showModal, setShowModal] = useState(false);
  const [editReceiver, setEditReceiver] = useState({
    id: receiver?._id,
  });

  const queryClient = useQueryClient();
  const navegation = useNavigate();
  const getAllReceivers = async () => {
    await getAllReceivers(receiver?._id);
    queryClient.invalidateQueries(["receivers"]);
  };
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
      </div>
    </div>
  );
};

export default ReceiverItem;
