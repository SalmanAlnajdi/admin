import instance from ".";

const getAllReceivers = async () => {
  try {
    const response = await instance.get("/receiver/");
    return response.data;
  } catch (error) {
    console.error("getAllReceivers", error.response.data);
  }
};
const updateReceiverById = async (
  id,
  name,
  email,
  phone,
  city,
  state,
  zipCode,
  location,
  address
) => {
  const res = await instance.put(`/receiver/${id}`, {
    name: name,
    email: email,
    phone: phone,
    address: address,
    city: city,
    state: state,
    zipCode: zipCode,
    location: location,
  });
  return res.data;
};
const createReceiver = async (event) => {
  const formData = new FormData();
  for (const key in event) {
    formData.append(key, event[key]);
  }
  const { data } = await instance.post("/receiver/", formData);
  if (data.success) {
    return data;
  }
};
const deleteReceiverById = async (id) => {
  const res = await instance.delete(`/receiver/${id}`);
  return res.data;
};
export {
  getAllReceivers,
  updateReceiverById,
  createReceiver,
  deleteReceiverById,
};
