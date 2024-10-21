import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"], // Ensure correct enum array for allowed values
  },
  profilePic: { type: String, default: "" },
});

const user = mongoose.model("person", userSchema);

export default user;
