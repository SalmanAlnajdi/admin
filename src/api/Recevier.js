import instance from ".";

const fetchData = async () => {
  try {
    const response = await instance.get("/receiver/");
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export { fetchData };
