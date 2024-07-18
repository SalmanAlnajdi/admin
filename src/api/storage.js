const getToken = () => {
  return localStorage.getItem("token");
};
const storeToken = (token) => {
  localStorage.setItem("token", token);
};
const removeToken = () => {
  localStorage.removeItem("token");
};

export { getToken, storeToken, removeToken };
