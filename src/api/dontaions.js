import instance from ".";

const getAllDonations = async () => {
  try {
    const res = await instance.get("donation/list");
    return res.data;
  } catch (error) {
    console.error("Error while fetching users", error);
  }
};
const getDonationById = async (id) => {
  try {
    const res = await instance.get(`/donation/list/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error while fetching users", error);
  }
};
const deleteDonation = async (id) => {
  try {
    const res = await instance.delete(`/donation/list/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error while deleting user", error);
  }
};
const createDonation = async (donationInfo) => {
  const formData = new FormData();
  for (const key in donationInfo) {
    formData.append(key, donationInfo[key]);
  }
  try {
    const res = await instance.post("/donation/", formData);
    if (res.data.success) {
      return res.data;
    }
  } catch (error) {
    console.error("Error while creating user", error);
  }
};

export { getAllDonations, getDonationById, deleteDonation, createDonation };
