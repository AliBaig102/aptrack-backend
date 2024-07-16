// Import the mongoose module and the Schema constructor from mongoose
import mongoose, { Schema } from "mongoose";

// Define a new schema for a Semester collection in MongoDB
const SemesterSchema = new Schema(
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
    // Define a batch_id field with type ObjectId, reference the Batch model, and mark it as required
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
      required: true,
    },
  },
  {
    // Enable timestamps to automatically add createdAt and updatedAt fields to the schema
    timestamps: true,
  },
);

// Create a model named Semester using the SemesterSchema
const Semester = mongoose.model("Semester", SemesterSchema);

// Export the Semester model as the default export of the module
export default Semester;
