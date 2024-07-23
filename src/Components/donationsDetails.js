import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDonationById } from "../api/dontaions";

const DonationDetails = () => {
  const { id } = useParams();
  const {
    data: donation = {},
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["donation", id._id],
    queryFn: () => getDonationById(id),
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching donation details</div>;

  return (
    <div className="w-full h-full bg-slate-400 flex justify-center flex-col items-center">
      <h1>{donation?._id}</h1>
      <h1>{donation?.date}</h1>
      <h1>{donation?.phone}</h1>
      <img
        src={donation?.image}
        alt={`${donation?.name}-image`}
        className="w-[200px] rounded-md"
      />
    </div>
  );
};

export default DonationDetails;
