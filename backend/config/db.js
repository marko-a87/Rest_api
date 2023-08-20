import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB is connectd ${conn.connection.host}`);
  } catch (error) {
    Console.log(error);
    process.exit(1);
  }
};

export default connectDB;
