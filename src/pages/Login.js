import { Input } from "../Components/Input";
import Button from "../Components/Button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { logIn } from "../api/Auth";
const Login = () => {
  const [adminInfo, setAdminInfo] = useState({});
  const { mutate, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => logIn(adminInfo),
  });
  const handleOnChange = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };
  console.log(adminInfo);
  const handleOnSubmit = () => {
    mutate();
    console.log(adminInfo);
  };
  return (
    <div className="bg-blue-200 h-full flex justify-center items-center flex-col  gap-3">
      <div className="font-bold gap-3"> SignIn as Admin </div>
      {/* Admin name input field */}
      <div className="w-[300px] h-[60px]">
        <Input
          label={"Admin name"}
          type="text"
          name="admin"
          handleOnChange={handleOnChange}
        />
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
      {/* Login button */}
      <div className="w-[300px] h-[35px] ">
        <Button Button={"Login"} handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  );
};

export default Login;
