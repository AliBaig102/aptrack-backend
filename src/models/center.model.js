// Import the mongoose module and the Schema constructor from mongoose
import mongoose, { Schema } from "mongoose";

// Define a new schema for a Center collection in MongoDB
const CenterSchema = new Schema(
  {
    // Define a center_name field with type String and mark it as required
    center_name: {
      type: String,
      required: true,
    },
    // Define a center_owner field with type String and mark it as required
    center_owner: {
      type: String,
      required: true,
    },
    // Define a center_owner_phone field with type String and mark it as required
    center_owner_phone: {
      type: String,
      required: true,
    },
  }, {
    // Enable timestamps to automatically add createdAt and updatedAt fields to the schema
    timestamps: true,
  },
);

// Create a model named Center using the CenterSchema
const Center = mongoose.model("Center", CenterSchema);

// Export the Center model as the default export of the module
export default Center;
