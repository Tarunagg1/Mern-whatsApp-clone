import user from "../models/user.js";

export const adduser = async (req, res) => {
  try {
    const isExist = await user.findOne({ googleId: req.body.googleId });
    if (isExist) {
      return res.status(200).json({ message: "user exists" });
    } else {
      const newUser = new user(req.body);
      await newUser.save();
      return res.status(201).json({ message: "user created" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


export const getUsers = async (req, res) => {
  try {
    const userData = await user.find({});
    return res.status(201).json({ message: "user lists", userData });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
