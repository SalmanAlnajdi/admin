import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllReceivers } from "../api/Recevier";
import ReceiverItem from "../Components/ReceiverItem";

const ReceiversPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["receivers"],
    queryFn: () => getAllReceivers(),
  });
  const receiverList = data?.map((receiver) => (
    <ReceiverItem receiver={receiver} key={receiver._id} />
  ));

  return (
    <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center p-3">
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {receiverList}
      </div>
    </div>
  );
};

export default ReceiversPage;
