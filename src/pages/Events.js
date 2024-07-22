import React from "react";
import { getAllEvents } from "../api/events";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import EventItem from "../Components/EventItem";
import Modal from "../Components/Modal";
import { createEvent } from "../api/events";

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["create Event"],
    mutationFn: () => createEvent(name, type, image),
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries("events");
    },
  });
  const [query, setQuery] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => getAllEvents(),
  });
  if (isLoading) return <p>Loading...</p>;

  const eventList = data?.map((event) => (
    <EventItem event={event} key={event.name} />
  ));

  return (
    <>
      <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center py-5">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
        >
          create
        </button>
        <Modal show={showModal} onClose={() => setShowModal(false)}></Modal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          {eventList}
        </div>
      </div>
    </>
  );
};

export default Events;
