import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  title: String,
  shop: String,
  favorite: Boolean,
});

const Event = model('event', eventSchema);

export default Event;
