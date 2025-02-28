import React from "react";
import { getAllEvents } from "../api/events";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import EventItem from "../Components/EventItem";
import Modal from "../Components/Modal";
import { createEvent } from "../api/events";

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [Participants, setParticipants] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["create Event"],
    mutationFn: () =>
      createEvent({
        name,
        description,
        date,
        address,
        image,
        gender,
        Participants,
        startTime,
        endTime,
      }),
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries("events");
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => getAllEvents(),
  });
  if (isLoading) return <p>Loading...</p>;
  const toatalEvents = data?.length;

  const eventList = data
    ?.filter((event) => event.name.toLowerCase().includes(query.toLowerCase()))
    ?.map((event) => <EventItem event={event} key={event.name} />);

  return (
    <>
      <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center py-5">
        <div>
          <input
            type="text"
            placeholder="Search events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <div> total Event: {toatalEvents}</div>
        </div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
        >
          create
        </button>
        <div className=" flex justify-center items-center w-full">
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="date"
              placeholder="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="time"
              placeholder="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="time"
              placeholder="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder=" Event Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="number"
              placeholder="Number of Participants"
              value={Participants}
              onChange={(e) => setParticipants(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <button onClick={() => setShowModal(false)}>Cancel</button>
            <button onClick={mutate} className="p-5">
              Submit
            </button>
          </Modal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          {eventList}
        </div>
      </div>
    </>
  );
};

export default Events;
