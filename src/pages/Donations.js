import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllDonations, createDonation } from "../api/dontaions";
import DonationItem from "../Components/DontationItem";
import { useMutation } from "@tanstack/react-query";
import Modal from "../Components/Modal";
import { useState } from "react";

const Donations = (id) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["Donations"],
    queryFn: () => getAllDonations(),
    onSuccess: () => {
      setShowModal(false);
      queryClient.setQueryData(["Donations"]);
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["create Donation"],
    mutationFn: () =>
      createDonation({ name, description, condition, createdBy }),
    onSuccess: () => {
      queryClient.invalidateQueries(["Donations"]);
    },
  });
  const donationList = data?.map((donation) => (
    <DonationItem donationItemI={donation} id={donation?._id} />
  ));

  if (isLoading) return <h1>loading...</h1>;
  const totalDonations = data?.length;

  return (
    <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center p-3">
      <div className=" flex justify-center w-full ">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
        >
          create
        </button>
        <div className="flex justify-between">
          total Donations : {totalDonations}
        </div>
        <div className=" flex justify-center items-center w-full">
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <h3>Create New Donation</h3>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="condition...."
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
            <input
              type="text"
              placeholder="created By..."
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
            />
            <input
              type="file"
              onChange={(e) => setNewEvent(e.target.files[0])}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <button onClick={mutate}>Create</button>
          </Modal>
        </div>
      </div>
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {donationList}
      </div>
    </div>
  );
};

export default Donations;
