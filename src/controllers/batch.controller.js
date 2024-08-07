import ApiErrors from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js";
import Batch from "../models/batch.model.js";

// Get All Batches
const getAllBatches = async (req, res) => {
  try {
    const batches = await Batch.find();
    if (batches.length > 0) {
      res.status(200).json(new ApiResponse(200, "Batches retrieved successfully", batches));
    } else {
      res.status(404).json(new ApiResponse(404, "Batches not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve batches from database", error.message);
  }
};

// Get Batch
const getBatch = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (batch) {
      res.status(200).json(new ApiResponse(200, "Batch retrieved successfully", batch));
    } else {
      res.status(404).json(new ApiResponse(404, "Batch not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve batch from database", error.message);
  }
};

// Add Batch
const addBatch = async (req, res) => {
  try {
    const { code, start_date, course_id, center_id } = req.body;
    [code, start_date, course_id, center_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const batch = await Batch.create({
      code,
      start_date,
      course_id,
      center_id,
    });
    await batch.save();
    if (batch) {
      res.status(201).json(new ApiResponse(201, "Batch added successfully", batch));
    } else {
      res.status(500).json(new ApiResponse(500, "Error : Failed to add batch to database"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to add batch to database", error.message);
  }
};

// Update Batch
const updateBatch = async (req, res) => {
  try {
    const { code, start_date, course_id } = req.body;
    [code, start_date, course_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const batch = await Batch.findByIdAndUpdate(req.params.id, { code, start_date, course_id }, { new: true });
    if (batch) {
      res.status(200).json(new ApiResponse(200, "Batch updated successfully", batch));
    } else {
      res.status(404).json(new ApiResponse(404, "Batch not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to update batch in database", error.message);
  }
};

// Delete Batch
const deleteBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);
    if (batch) {
      res.status(200).json(new ApiResponse(200, "Batch deleted successfully", batch));
    } else {
      res.status(404).json(new ApiResponse(404, "Batch not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to delete batch from database", error.message);
  }
};

// Export
export {
  getAllBatches,
  getBatch,
  addBatch,
  updateBatch,
  deleteBatch,
};