// Import the mongoose module and the Schema constructor from mongoose
import mongoose, { Schema } from "mongoose";

// Define a new schema for a Module collection in MongoDB
const ModuleSchema = new Schema(
  {
    // Define a name field with type String and mark it as required
    name: {
      type: String,
      required: true,
    },
    // Define a course_id field with type ObjectId, reference the Course model, and mark it as required
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    // Define a semester_id field with type ObjectId, reference the Semester model, but it is not required
    semester_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semester",
    },
  },
  {
    // Enable timestamps to automatically add createdAt and updatedAt fields to the schema
    timestamps: true,
  },
);

// Create a model named Module using the ModuleSchema
const Module = mongoose.model("Module", ModuleSchema);

// Export the Module model as the default export of the module
export default Module;
