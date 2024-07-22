import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneEvent } from "../api/events";

const EventDetails = () => {
  const { id } = useParams();
  const { data: event } = useQuery({
    queryKey: ["event", id._id],
    queryFn: () => getOneEvent(id),
  });
  return (
    <div className="w-full h-full bg-slate-400 flex justify-center flex-col items-center">
      <h1>{id}</h1>
      <h1>{event?.name}</h1>
      <h1>{event?.date}</h1>
      <h1>{event?.phone}</h1>
      <img
        src={event?.image}
        alt={`${event?.name}-image`}
        className="w-[200px] rounded-md"
      />
    </div>
  );
};

export default EventDetails;
