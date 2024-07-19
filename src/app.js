// Import the express module to create an Express application
import express from 'express';

// Import the cors module to enable Cross-Origin Resource Sharing
import cors from 'cors';

// Import the cookie-parser module to parse cookies in incoming requests
import cookieParser from 'cookie-parser';

// Create an instance of an Express application
const app = express();

// Use the cors middleware with specific options to enable CORS
app.use(cors({
  // Allow credentials (cookies, authorization headers, TLS client certificates)
  credentials: true,
  // Specify the origin that is allowed to access the resources
  origin: process.env.ORIGIN,
}));

// Use the express.json middleware to parse incoming JSON requests with a size limit of 50MB
app.use(express.json({ limit: '50mb' }));

// Use the cookie-parser middleware to parse cookies in incoming requests
app.use(cookieParser());

// Use the express.urlencoded middleware to parse URL-encoded data with the extended option set to true
app.use(express.urlencoded({ extended: true }));

// Use the express.static middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Import the routes module
import InquiryRouter from './routes/inquiry.routes.js';

// Declaring the routes
app.use('/api/v1/inquiry', InquiryRouter);
// Export the app instance as the default export of the module
export default app;
