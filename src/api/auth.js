import instance from ".";
import { storeToken } from "./storage";

const logIn = async (adminInfo) => {
  const res = await instance.post("/login", { adminInfo });

  if (res.data) {
    storeToken(res.data.token);
  }
  return res.data;
};
export { logIn };
