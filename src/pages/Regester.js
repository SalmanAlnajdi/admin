import React from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/Auth";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/userContext";

export const Regester = () => {
  const [adminInfo, setAdminInfo] = useState({});
  const nav = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const { mutate, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(adminInfo),
    onSuccess: () => {
      nav("/Home");
      setUser(true);
    },
  });

  const handleOnChange = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-blue-200 h-full flex justify-center items-center flex-col  gap-3">
      <div className="font-bold gap-3"> signup as Admin </div>
      {/* Admin name input field */}
      <div className="w-[300px] h-[60px]">
        <Input type="text" name="username" handleOnChange={handleOnChange} />
      </div>

      {/* Password input field */}
      <div className="w-[300px] h-[60px]">
        <Input
          label={"Password"}
          type="password"
          name="password"
          handleOnChange={handleOnChange}
        />
      </div>
      {error && <div className="text-red-500">{error.message}</div>}
      {/* Regester button */}

      <div className="w-[300px] h-[35px] " onClick={mutate}>
        <Button Button={"Regester"} />
      </div>
    </div>
  );
};
