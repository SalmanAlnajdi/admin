import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import {
  getDonationById,
  deleteDonation,
  getAllDonations,
} from "../api/dontaions";

const DonationItem = ({ donationItemI }) => {
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ["donation", donationItemI?._id],
    queryFn: () => getAllDonations(donationItemI?._id),
  });
  const navegation = useNavigate();
  const handelNavegation = () => {
    navegation(`/donations/${donationItemI._id}`);
  };

  const handleDelete = async () => {
    await deleteDonation(donationItemI?._id);
    queryClient.invalidateQueries("donations");
  };
  if (!user) return <div>Loading...</div>;

  return (
    <div className=" flex flex-row">
      <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
        <h1 className="text-md font-bold"> Name {donationItemI?.name}</h1>
        <h1 className="text-md font-bold">
          Created By : {donationItemI?.createBy?.username}
        </h1>

        <button>
          <Link to={`/donations/${donationItemI?._id}`}>click</Link>
        </button>

        <button
          onClick={handleDelete}
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default DonationItem;
