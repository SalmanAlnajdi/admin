import instance from ".";

const getAllReceivers = async () => {
  try {
    const response = await instance.get("/receiver/");
    return response.data;
  } catch (error) {
    console.error("getAllReceivers", error.response.data);
  }
};

export { getAllReceivers };
