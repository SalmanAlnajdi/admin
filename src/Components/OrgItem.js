import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getOrgById } from "../api/orgnaizationApi";
import { Link } from "react-router-dom";

const OrgItem = ({ org }) => {
  const { data } = useQuery({
    queryKey: ["organization", org.id],
    queryFn: () => getOrgById(),
  });
  const navegation = useNavigate();
  const handelNavegation = () => {
    navegation(`/organization/${org.id}`);
  };
  return (
    <Link to={`/organization/profile:${org._id}`}>
      <div>
        <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
          <h1 className="text-md font-bold">{org.username}</h1>
          <img
            src={
              data?.image
                ? `http://localhost:8000/${data.image}`
                : `https://via.placeholder.com/200/000000?`
            }
            alt={`${org.username}-image`}
            className="w-[200px] rounded-md
      "
          />
          <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
            View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default OrgItem;
