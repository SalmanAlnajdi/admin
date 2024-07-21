import React from "react";

const Input = ({ label, type, name, handleOnChange, email }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <p>{label}</p>
      <input
        placeholder={label}
        className="h-[75px] border px-3"
        type={type}
        name={name}
        onChange={handleOnChange}
        email={email}
      />
    </div>
  );
};
export default Input;
