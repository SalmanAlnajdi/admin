import instance from ".";

const getAllEvents = async () => {
  try {
    const res = await instance.get("/event/");
    return res.data;
  } catch (error) {
    throw new Error(`Error fetching events: ${error.message}`);
  }
};
const getOneEvent = async (id) => {
  try {
    const res = await instance.get(`/event/eventbyid/:id${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching event by ID: ${error.message}`);
  }
};

export { getAllEvents, getOneEvent };
