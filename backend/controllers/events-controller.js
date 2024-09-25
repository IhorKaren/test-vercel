import Event from '../models/events-model.js';

const getAllEvents = async (req, res) => {
  const result = await Event.find();
  res.json(result);
  console.log(result);
};

export default getAllEvents;
