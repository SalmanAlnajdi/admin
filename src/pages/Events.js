import React from "react";
import { getAllEvents } from "../api/events";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Events = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useQuery({
    querykey: ["events"],
    queryFn: () => getAllEvents(),
  });
  if (isLoading) return <p>Loading...</p>;

  const eventList = data?.map((event) => (
    <div
      key={event?._id}
      className="bg-white p-5 rounded-md shadow-md flex flex-col items-center justify-center gap-3 w-80"
    >
      <h2>{event?.name}</h2>
      <h2>{event?.userId}</h2>
      <h2>{event?.images}</h2>
      <h2>{event?.location}</h2>
    </div>
  ));
  return (
    <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
        {eventList}
      </div>
    </div>
  );
};

export default Events;
