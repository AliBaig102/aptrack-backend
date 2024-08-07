import ApiErrors from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js";
import Module from "../models/module.model.js";

// Get All Modules
const getAllModules = async (req, res) => {
  try {
    const modules = await Module.find();
    if (modules.length > 0) {
      res.status(200).json(new ApiResponse(200, "Modules retrieved successfully", modules));
    } else {
      res.status(404).json(new ApiResponse(404, "Modules not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve modules from database", error.message);
  }
};

// Get Single Modules
const getModule = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);
    if (module) {
      res.status(200).json(new ApiResponse(200, "Module retrieved successfully", module));
    } else {
      res.status(404).json(new ApiResponse(404, "Module not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve module from database", error.message);
  }
};

// Add Modules
const addModule = async (req, res) => {
  try {
    const { name, course_id, semester_id } = req.body;
    [name, course_id, semester_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const module = await Module.create({
      name,
      course_id,
      semester_id,
    });
    await module.save();
    if (module) {
      res.status(201).json(new ApiResponse(201, "Module added successfully", module));
    } else {
      res.status(500).json(new ApiResponse(500, "Error : Failed to add module to database"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to add module to database", error.message);
  }
};

// Update Modules
const updateModule = async (req, res) => {
  try {
    const { name, course_id, semester_id } = req.body;
    [name, course_id, semester_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const module = await Module.findByIdAndUpdate(req.params.id, { name, course_id, semester_id }, { new: true });
    if (module) {
      res.status(200).json(new ApiResponse(200, "Module updated successfully", module));
    } else {
      res.status(404).json(new ApiResponse(404, "Module not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to update module in database", error.message);
  }
};

// Delete Modules
const deleteModule = async (req, res) => {
  try {
    const module = await Module.findByIdAndDelete(req.params.id);
    if (module) {
      res.status(200).json(new ApiResponse(200, "Module deleted successfully", module));
    } else {
      res.status(404).json(new ApiResponse(404, "Module not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to delete module from database", error.message);
  }
};

// Export Modules
export { getAllModules, getModule, addModule, updateModule, deleteModule };