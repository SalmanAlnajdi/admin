import instance from ".";

const getAllOrgs = async () => {
  try {
    const response = await instance.get("/organization/");
    return response.data;
  } catch (error) {
    console.error("getAllOrgs", error);
  }
};
const getOrgById = async (id) => {
  try {
    const response = await instance.get(`/organization/profile/${id}`);
    return response.data;
  } catch (error) {
    console.error("getOrgById", error);
  }
};
const deleteOrgById = async (id) => {
  try {
    const response = await instance.delete(`/orgnaizations/${id}`);
    return response.data;
  } catch (error) {
    console.error("deleteOrgById", error);
  }
};

/*const createOrg = async (name,history,type,from,image) => { */

export { getAllOrgs, getOrgById, deleteOrgById };
