//Loads the user data
import User from "../models/userModel.js";

/* Crud operations 
const getUsers 
const createUsers
const updateUsers 
const deleteUsers
*/
const createUsers = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });

    if (user) {
      res.status(200).json({ message: "User created" });
      console.log("User created in MongoDB");
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
    console.log(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (user) {
      res.status(200).json(user);
      console.log("Found users in DB");
    } else {
      res.status(400);
      throw new Error("No users found");
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
    console.log(error.message);
  }
};

const deleteUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).send({ message: "User deleted successfully" });
      console.log("User deleted from DB");
    } else {
      res.status(400);
      throw new Error("User does not exist");
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
    console.log(error.message);
  }
};

const updateUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      },
      {
        new: true,
      }
    );
    const updated_user = await user.save();
    if (updated_user) {
      res.json(updated_user);
      console.log("User updated in DB");
    } else {
      res.status(400);
      throw new Error("User does not exist");
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
    console.log(error.message);
  }
};
export { createUsers, getUsers, deleteUsers, updateUsers };
