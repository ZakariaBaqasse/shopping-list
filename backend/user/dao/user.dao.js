import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.log("Error in User DAO: findUserByEmail: ", error.message);
    throw new Error(error);
  }
};

export const addUser = async (username, email, password) => {
  try {
    const findUser = await findUserByEmail(email);
    if (findUser) {
      throw new Error("Email already taken");
    }
    const user = new User({ username, email, password });
    return await user.save();
  } catch (error) {}
};
