// Import the mongoose module to interact with MongoDB
import mongoose from 'mongoose';

// Define an asynchronous function to connect to the MongoDB database
export const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the connection URL and database name from environment variables
    const { connection } = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);

    // Log a success message with the database host if the connection is successful
    console.log(`Success: MongoDB connected! DB Host: ${connection.host}`);
  } catch (error) {
    // Log a custom error message if the connection fails
    console.error("Critical Error: Failed to establish a database connection.");
    // Log the specific error message for debugging purposes
    console.error(`Details: ${error.message}`);
    // Exit the process with a failure status code
    process.exit(1);
  }
}
