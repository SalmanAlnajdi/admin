import React from "react";

const Button = ({ Button, handleOnSubmit }) => {
  return (
    <div
      onClick={handleOnSubmit}
      className="w-full h-full bg-blue-900 rounded-lg flex justify-center items-center cursor-pointer"
    >
      {Button}
    </div>
  );
};

export default Button;
