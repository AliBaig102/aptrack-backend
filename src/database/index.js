import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
    console.log(`Success: MongoDB connected !! DB Host:${connection.host}`);
  } catch (error) {
    console.log("Error in Database Connection: ");
    console.log(`Error: Error connecting to MongoDB : ${error.message}`);
    process.exit(1);
  }
}