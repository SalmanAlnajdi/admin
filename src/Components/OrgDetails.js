import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getOrgById } from "../api/orgnaizationApi";

export const OrgDetails = () => {
  const { id } = useParams();
  const { data: organization } = useQuery({
    queryKey: ["orgnaization", id],
    queryFn: () => getOrgById(id),
  });

  return <div>OrgDetails</div>;
};
