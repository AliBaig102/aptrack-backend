// Define a class named ApiResponse
class ApiResponse {

  // Constructor method to initialize an instance of ApiResponse
  constructor(statusCode, message, data = null) {
    // Assign the passed statusCode parameter to the statusCode property of the instance
    this.statusCode = statusCode;
    // Assign the passed message parameter to the message property of the instance
    this.message = message;
    // Assign the passed data parameter to the data property of the instance, defaulting to null if not provided
    this.data = data;
    // Determine if the response is successful based on the status code
    // Success is defined as a status code in the range [200, 400)
    this.success = this.statusCode >= 200 && this.statusCode < 400;
  }
}

// Export the ApiResponse class as the default export of the module
export default ApiResponse;
