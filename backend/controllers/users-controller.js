import User from '../models/users-model.js';

const getAllUsers = async (req, res) => {
  const result = await User.find();
  res.json(result);
};

const addNewUser = async (req, res) => {
  try {
    const { fullname, email, date, socmedia, friends, found, title, idtitle } =
      req.body;
    const newUser = new User({
      fullname,
      email,
      date,
      socmedia,
      friends,
      found,
      title,
      idtitle,
    });
    console.log(newUser);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default { getAllUsers, addNewUser };
