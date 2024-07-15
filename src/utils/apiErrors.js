// Define a class named ApiErrors that extends the built-in Error class
class ApiErrors extends Error {

  // Constructor method to initialize an instance of ApiErrors
  constructor(status, message, errors = [], stack = "") {
    // Call the constructor of the parent Error class with the message parameter
    super(message);

    // Assign the passed status parameter to the status property of the instance
    this.status = status;

    // Assign the passed message parameter to the message property of the instance
    this.message = message;

    // Set the data property to null (no data associated with an error)
    this.data = null;

    // Assign the passed errors parameter to the errors property of the instance, defaulting to an empty array if not provided
    this.errors = errors;

    // Set the success property to false (indicating the response is an error)
    this.success = false;

    // If a stack trace is provided, assign it to the stack property of the instance
    if (stack) {
      this.stack = stack;
    }
    // Otherwise, capture the stack trace and assign it to the stack property
    else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the ApiErrors class as the default export of the module
export default ApiErrors;
