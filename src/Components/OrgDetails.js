import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrgById } from "../api/orgnaizationApi";

export const OrgDetails = () => {
  const { id } = useParams();
  const { data: organization } = useQuery({
    queryKey: ["orgnaization", id._id],
    queryFn: () => getOrgById(id),
  });

  return (
    <div className="w-full h-100% bg-slate-400 flex justify-center">
      <div>
        <h1>{id}</h1>
        <h1>{organization?.username}</h1>
        <h1>{organization?.email}</h1>
        <h1>{organization?.phone}</h1>
        <img
          src={organization?.image}
          alt={`${organization?.name}-image`}
          className="w-[200px] rounded-md"
        />
      </div>
    </div>
  );
};
