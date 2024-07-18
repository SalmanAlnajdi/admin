import React from "react";
import { getAllEvents } from "../api/events";
import { useQuery } from "@tanstack/react-query";

const Events = () => {
  const { data, isLoading } = useQuery({
    querykey: ["events"],
    queryFn: () => getAllEvents(),
  });
  if (isLoading) return <p>Loading...</p>;

  const eventList = data?.map((event) => (
    <div
      key={event?._id}
      className="bg-white p-5 rounded-md shadow-md flex flex-col items-center justify-center gap-3"
    >
      <h2>{event?.title}</h2>
      <h2>{event?.description}</h2>
      <h2>{event?.date}</h2>
    </div>
  ));
  return (
    <div className="bg-green-400 w-full h-full flex flex-wrap gap-3 justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {eventList}
      </div>
    </div>
  );
};

export default Events;
