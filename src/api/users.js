import instance from ".";

const getAllUsers = async () => {
  try {
    const res = await instance.get("/user/");
    return res.data;
  } catch (error) {
    console.error("Error while fetching users", error);
  }
};

const getUserById = async (id) => {
  try {
    const res = await instance.get(`/user/myprofile/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error while fetching user by ID", error);
  }
};
const deleteUser = async (id) => {
  try {
    const res = await instance.delete(`/user/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error while deleting user", error);
  }
};
const updateUser = async (adminInfo) => {
  console.log("userInfo", adminInfo);
  const formData = new FormData();
  for (const key in adminInfo) {
    formData.append(key, adminInfo[key]);
  }
  try {
    const res = await instance.put(`/user/myprofile`, formData);

    return res.data;
  } catch (error) {
    console.error("Error while creating user", error);
  }
};
const updateUserInfo = async (id, userInfo) => {
  console.log("userInfo", userInfo);
  const formData = new FormData();
  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  try {
    const res = await instance.put(`/user/myprofile/${id}`, formData);
    return res.data;
  } catch (error) {
    console.error("Error while updating user", error);
  }
};

export { getAllUsers, getUserById, deleteUser, updateUser, updateUserInfo };
