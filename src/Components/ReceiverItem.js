import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../api/Recevier";

const ReceiverItem = ({ receiver }) => {
  // Your query here
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["receivers", receiver?._id],
    queryFn: () => fetchData(),
  });

  return <div>ReceiverItem</div>;
};

export default ReceiverItem;
