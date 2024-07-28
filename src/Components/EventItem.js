import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getOneEvent, deleteEvent } from "../api/events";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { upDateEventById } from "../api/events";
import { BASE_URL } from "../api/index";

const EventItem = ({ event }) => {
  //const { data } = useQuery({
  //queryKey: ["events", event?._id],
  //queryFn: () => getOneEvent(event?._id),
  //});
  const [showModal, setShowModal] = useState(false);
  const [editEvent, setEditEvent] = useState({});

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const handelDelete = async () => {
    await deleteEvent(event._id);
    queryClient.invalidateQueries("events");
  };
  const handelNavegation = () => {
    navigate(`/eventbyid/:id${event._id}`);
  };
  const { mutate } = useMutation({
    mutationKey: ["editEvent", event._id],
    mutationFn: () => upDateEventById(event._id, editEvent),
    onSuccess: () => {
      queryClient.invalidateQueries("events");
      setShowModal(false);
    },
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setEditEvent({ ...editEvent, [e.target.name]: e.target.files[0] });
    } else {
      setEditEvent({ ...editEvent, [e.target.name]: e.target.value });
    }
  };
  console.log(event);
  return (
    <div>
      <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
        <h1 className="text-md font-bold">{event?.name}</h1>
        <img
          src={BASE_URL + "/" + event?.image}
          alt={`${event.image}-image`}
          className="w-[200px] rounded-md
      "
        />

        <Link to={`/eventbyid/${event._id}`}>
          <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
            View
          </button>
        </Link>
        <button
          onClick={handelDelete}
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
        >
          delete
        </button>
        <button
          className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black flex justify-center items-center bg-green-400 hover:bg-green-600"
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
            name="name"
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
            type="time"
            name="start time"
            placeholder="start time"
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
export default EventItem;
