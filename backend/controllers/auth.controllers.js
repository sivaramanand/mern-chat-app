import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const loginUser = (req, res) => {};

export const logoutUser = (req, res) => {};

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmpassword, gender } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    const profilePic = gender === "male" ? boyprofilepic : girlprofilepic;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic,
    });
    if (newUser) {
      await newUser.save();
      res.status(201).json({ message: "User created successfully", newUser });
    } else {
      res.status(400).json({ error: "Invalid user Data" });
    }
  } catch (err) {
    console.log("Error in signup controller:", err);
    res.status(500).json({ error: "Server error" });
  }
};
