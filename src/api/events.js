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
    const res = await instance.get(`/event/eventbyid/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching event by ID: ${error.message}`);
  }
};
const deleteEvent = async (id) => {
  try {
    const res = await instance.delete(`/event/deleteevent/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error deleting event by ID: ${error.message}`);
  }
};
const upDateEventById = async (id, event) => {
  try {
    const res = await instance.put(`/event/updateevent/${id}`, event);
    return res.data;
  } catch (error) {
    console.error(`Error updating event by ID: ${error.message}`);
  }
};
const createEvent = async (event) => {
  const formData = new FormData();
  for (const key in event) {
    formData.append(key, event[key]);
  }
  const { data } = await instance.post("/event/create", formData);
  if (data.success) {
    return data;
  }
};

export { getAllEvents, getOneEvent, deleteEvent, upDateEventById, createEvent };
