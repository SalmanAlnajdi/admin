import React from "react";

export const Input = ({ label, type, name, handleOnChange }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <p>{label}</p>
      <input
        placeholder={label}
        className="h-[75px] border px-3"
        type={type}
        name={name}
        onChange={handleOnChange}
      />
    </div>
  );
};
