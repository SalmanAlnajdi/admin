import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllOrgs } from "../api/orgnaizationApi";
import { useState } from "react";
import OrgItem from "../Components/OrgItem";

export const Orgnaization = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["orgnaizations"],
    queryFn: () => getAllOrgs(),
  });
  const organizationList = data
    ?.filter((org) => org.username.toLowerCase().includes(query.toLowerCase()))
    .map((org) => <OrgItem org={org} key={org.username} />);
  if (isLoading) return <div>Loading...</div>;
  const totalOrgs = data?.length;

  return (
    <div className="bg-green-400 w-full h-100% flex flex-wrap gap-3 justify-center items-center p-3">
      <h1>Orgnaization</h1>
      <div className=" w-full  flex justify-center">
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>Total Orgs: {totalOrgs}</div>
      </div>
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {organizationList}
      </div>
    </div>
  );
};
