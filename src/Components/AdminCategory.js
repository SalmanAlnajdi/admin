import React from "react";

const AdminCategory = ({ name, information }) => {
  return (
    <div className="w-[200px] h-[200px] m-2 border-2 border-red-500">
      {name}
      <p>{information}</p>
    </div>
  );
};

export default AdminCategory;
