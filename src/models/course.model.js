// Import the mongoose module and the Schema constructor from mongoose
import mongoose, { Schema } from "mongoose";

// Define a new schema for a Course collection in MongoDB
const CourseSchema = new Schema(
  {
    // Define a name field with type String and mark it as required
    name: {
      type: String,
      required: true,
    },
    // Define a code field with type String and mark it as required
    code: {
      type: String,
      required: true,
    },
  },
  {
    // Enable timestamps to automatically add createdAt and updatedAt fields to the schema
    timestamps: true,
  },
);

// Create a model named Course using the CourseSchema
const Course = mongoose.model("Course", CourseSchema);

// Export the Course model as the default export of the module
export default Course;
