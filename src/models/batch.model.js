// Import the mongoose module and the Schema constructor from mongoose
import mongoose, { Schema } from "mongoose";

// Define a new schema for a Batch collection in MongoDB
const BatchSchema = new Schema(
  {
    // Define a code field with type String and mark it as required
    code: {
      type: String,
      required: true,
    },
    // Define a start_date field with type Date and mark it as required
    start_date: {
      type: Date,
      required: true,
    },
    // Define a course_id field with type ObjectId, reference the Course model, and mark it as required
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    // Define a center_id field with type ObjectId, reference the Center model, and mark it as required
    center_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Center",
      required: true,
    },
  },
  {
    // Enable timestamps to automatically add createdAt and updatedAt fields to the schema
    timestamps: true,
  },
);

// Create a model named Batch using the BatchSchema
const Batch = mongoose.model("Batch", BatchSchema);

// Export the Batch model as the default export of the module
export default Batch;
