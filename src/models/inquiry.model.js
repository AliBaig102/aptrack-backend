// Import the mongoose module and the Schema constructor from mongoose
import mongoose, { Schema } from "mongoose";

// Define a new schema for an Inquiry collection in MongoDB
const InquirySchema = new Schema(
  {
    // Define an inquiry_num field with type Number and a default value of 0
    inquiry_num: {
      type: Number,
      default: 0,
    },
    // Define a first_name field with type String and mark it as required
    first_name: {
      type: String,
      required: true,
    },
    // Define a last_name field with type String and mark it as required
    last_name: {
      type: String,
      required: true,
    },
    // Define an email field with type String, mark it as required, trim whitespace, and convert to lowercase
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    // Define a phone field with type String and mark it as required
    phone: {
      type: String,
      required: true,
    },
    // Define a second_phone field with type String and mark it as required
    second_phone: {
      type: String,
      required: true,
    },
    // Define an address field with type String and mark it as required
    address: {
      type: String,
      required: true,
    },
    // Define a status field with type String and mark it as required
    status: {
      type: String,
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

// Create a model named Inquiry using the InquirySchema
const Inquiry = mongoose.model("Inquiry", InquirySchema);

// Export the Inquiry model as the default export of the module
export default Inquiry;
