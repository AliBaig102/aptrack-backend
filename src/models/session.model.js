// Import the mongoose module and the Schema constructor from mongoose
import mongoose, { Schema } from "mongoose";

// Define a new schema for a Session collection in MongoDB
const SessionSchema = new Schema(
  {
    // Define a name field with type String and mark it as required
    name: {
      type: String,
      required: true,
    },
    // Define a module_id field with type ObjectId, reference the Module model, and mark it as required
    module_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
  },
  {
    // Enable timestamps to automatically add createdAt and updatedAt fields to the schema
    timestamps: true,
  },
);

// Create a model named Session using the SessionSchema
const Session = mongoose.model("Session", SessionSchema);

// Export the Session model as the default export of the module
export default Session;
