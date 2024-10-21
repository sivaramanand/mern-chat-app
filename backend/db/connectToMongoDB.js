import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.mongodburl);
  } catch (error) {
    console.log(`connection error ${error}`);
  }
};
export default connectToMongoDB;
