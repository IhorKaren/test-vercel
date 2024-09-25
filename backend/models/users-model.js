import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: String,
  fullname: String,
  email: String,
  date: String,
  socmedia: Boolean,
  friends: Boolean,
  found: Boolean,
  title: String,
  idtitle: String,
});

const User = model('user', userSchema);

export default User;
