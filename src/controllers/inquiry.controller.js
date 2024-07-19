import Inquiry from "../models/inquiry.model.js";
import ApiErrors from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js";

// Get All Inquiries
const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    if (inquiries.length > 0) {
      res.status(200).json(new ApiResponse(200, "Inquiries retrieved successfully", inquiries));
    } else {
      res.status(404).json(new ApiResponse(404, "Inquiries not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve inquiries from database", error.message);
  }
};

// Get Inquiry
const getInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (inquiry) {
      res.status(200).json(new ApiResponse(200, "Inquiry retrieved successfully", inquiry));
    } else {
      res.status(404).json(new ApiResponse(404, "Inquiry not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve inquiry from database", error.message);
  }
};

// Add Inquiry
const addInquiry = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, second_phone, address, status, center_id } = req.body;
    [first_name, last_name, email, phone, second_phone, address, status, center_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const maxInquiry = await Inquiry.findOne({ center_id }).sort({ inquiry_num: -1 }).exec();

    // Set the inquiry_number
    const inquiry_num = maxInquiry ? maxInquiry.inquiry_num + 1 : 1;
    const inquiry = await Inquiry.create({
      inquiry_num,
      first_name,
      last_name,
      email,
      phone,
      second_phone,
      address,
      status,
      center_id,
    });
    await inquiry.save();
    if (inquiry) {
      res.status(201).json(new ApiResponse(201, "Inquiry added successfully", inquiry));
    } else {
      res.status(500).json(new ApiResponse(500, "Error : Failed to add inquiry to database"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to add inquiry to database", error.message);
  }
};

// Update Inquiry
const updateInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (inquiry) {
      res.status(200).json(new ApiResponse(200, "Inquiry updated successfully", inquiry));
    } else {
      res.status(404).json(new ApiResponse(404, "Inquiry not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to update inquiry in database", error.message);
  }
};

// Delete Inquiry
const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (inquiry) {
      res.status(200).json(new ApiResponse(200, "Inquiry deleted successfully", inquiry));
    } else {
      res.status(404).json(new ApiResponse(404, "Inquiry not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to delete inquiry from database", error.message);
  }
};

// Search Inquiry
// Search By First Name or Last Name
const searchInquiryByName = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({
      $or: [
        { first_name: { $regex: req.params.name, $options: "i" } },
        { last_name: { $regex: req.params.name, $options: "i" } },
      ],
    });
    if (inquiries) {
      res.status(200).json(new ApiResponse(200, "Inquiries retrieved successfully", inquiries));
    } else {
      res.status(404).json(new ApiResponse(404, "Inquiries not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve inquiries from database", error.message);
  }
};

//Export the functions
export { getAllInquiries, getInquiry, addInquiry ,updateInquiry, deleteInquiry, searchInquiryByName };