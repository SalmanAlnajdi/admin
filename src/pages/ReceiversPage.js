import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllReceivers, createReceiver } from "../api/Recevier";
import ReceiverItem from "../Components/ReceiverItem";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import Modal from "../Components/Modal";

const ReceiversPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutateKey: ["create Receiver"],
    mutationFn: () =>
      createReceiver({
        name,
        email,
        phone,
        city,
        state,
        zipCode,
        address,
        location,
      }),
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries(["receivers"]);
      setAddress("");
      setCity("");
      setEmail("");
      setName("");
      setPhone("");
      setState("");
      setLocation("");
      setZipCode("");
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["receivers"],
    queryFn: () => getAllReceivers(),
  });
  const [newReceiver, setNewReceiver] = useState("");
  const receiverList = data?.map((receiver) => (
    <ReceiverItem receiver={receiver} key={receiver.name} />
  ));
  const totalReceivers = data?.length;

  return (
    <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center p-3">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white"
      >
        create
      </button>
      <div className="w-full flex flex-wrap gap-3">
        total receiver: {totalReceivers}
      </div>
      <div className=" flex justify-center items-center w-full">
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h3>Create New Receiver</h3>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <input
            type="text"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button onClick={() => setShowModal(false)}>Cancel</button>
          <button onClick={mutate} className="p-5">
            Submit
          </button>
        </Modal>
      </div>
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {receiverList}
      </div>
    </div>
  );
};

export default ReceiversPage;
