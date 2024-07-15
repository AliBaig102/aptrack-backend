// Define a function named asyncHandler that takes a requestHandler function as an argument
const asyncHandler = (requestHandler) => {

  // Return a new function that takes req, res, and next as arguments
  return (req, res, next) => {

    // Call the requestHandler function with req, res, and next wrapped in a Promise
    // If the Promise resolves, it means the requestHandler executed successfully
    // If the Promise rejects (i.e., an error occurs), pass the error to the next middleware
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// Export the asyncHandler function as the default export of the module
export default asyncHandler;
