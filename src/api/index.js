import axios from "axios";
const BASE_URL = "http://localhost:8000";
const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});
export { BASE_URL };
export default instance;
