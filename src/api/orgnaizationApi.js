import instance from ".";

const getAllOrgs = async () => {
  try {
    const response = await instance.get("/organization/");
    return response.data;
  } catch (error) {
    console.error("getAllOrgs", error.response.data);
  }
};
const getOrgById = async (id) => {
  try {
    const response = await instance.get(`/organization/profile/${id}`);
    return response.data;
  } catch (error) {
    console.error("getOrgById", error.response?.data);
  }
};
const deleteOrgById = async (id) => {
  try {
    const response = await instance.delete(`/organization/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("deleteOrgById", error.massage);
  }
};
const updateOrgById = async (id, orgData) => {
  const formData = new FormData();
  for (const key in orgData) {
    formData.append(key, orgData[key]);
  }
  const { data } = await instance.put(`/organization/profile/${id}`, formData);
  return data;
};

export { getAllOrgs, getOrgById, deleteOrgById, updateOrgById };
