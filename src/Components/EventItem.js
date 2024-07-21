import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getOneEvent } from "../api/eventApi";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  const { data } = useQuery({
    queryKey: ["event", event.id],
    queryFn: () => getOneEvent(),
  });
  const navigate = useNavigate();
  const handelNavegation = () => {
    navigate(`/event/${event.id}`);
  };
  return <div>hi</div>;
};
