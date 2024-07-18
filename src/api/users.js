import instance from ".";

const getAllUsers = async () => {
  try {
    const res = await instance.get("/users");
    return res.data;
  } catch (error) {
    console.error("Error while fetching users", error);
  }
};

const getUserById = async (id) => {
  try {
    const res = await instance.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error while fetching user by ID", error);
  }
};
const deleteUser = async (id) => {
  try {
    const res = await instance.delete(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error while deleting user", error);
  }
};

export { getAllUsers, getUserById, deleteUser };
