// Import the dotenv module to load environment variables from a .env file
import dotenv from 'dotenv';

// Import the connectDB function from the database module to establish a database connection
import { connectDB } from './database/index.js';

// Import the Express application instance from the app module
import app from "./app.js";

// Load environment variables from the specified .env file
dotenv.config({ path: './env' });

// Define the port on which the server will listen, defaulting to 3000 if the PORT environment variable is not set
const port = process.env.PORT || 3000;

// Call the connectDB function to connect to the database
connectDB()
  .then(() => {
    // If the database connection is successful, log a success message
    console.log('Database connected');

    // Start the Express server and listen on the specified port
    app.listen(port, () => {
      // Log a message indicating the server is listening on the specified port
      console.log(`Server listening on port ${port}`);
      // Log the URL for accessing the server locally
      console.log(`http://localhost:${port}`);
    });
  })
  // If there is an error during the database connection, catch it and log the error
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
