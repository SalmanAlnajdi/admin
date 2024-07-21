import instance from ".";
import { storeToken, removeToken, getToken } from "./storage";

const logIn = async (userInfo) => {
  const { data } = await instance.post("/admin/signin", userInfo);
  if (data.token) {
    storeToken(data.token);
  }
  return data;
};
const logOut = () => {
  removeToken("token");
};
const register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  const { data } = await instance.post("/admin/signup", formData);
  if (data.token) {
    storeToken(data.token);
  }
  return data;
};
export { logIn, logOut, register };
