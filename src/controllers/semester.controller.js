import ApiErrors from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js";
import Semester from "../models/semester.model.js";

// Get All Semesters
const getAllSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    if (semesters.length > 0) {
      res.status(200).json(new ApiResponse(200, "Semesters retrieved successfully", semesters));
    } else {
      res.status(404).json(new ApiResponse(404, "Semesters not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve semesters from database", error.message);
  }
};

// Get Single Semesters
const getSemester = async (req, res) => {
  try {
    const semester = await Semester.findById(req.params.id);
    if (semester) {
      res.status(200).json(new ApiResponse(200, "Semester retrieved successfully", semester));
    } else {
      res.status(404).json(new ApiResponse(404, "Semester not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve semester from database", error.message);
  }
};

// Add Semesters
const addSemester = async (req, res) => {
  try {
    const { code, batch_id, course_id } = req.body;
    [code, batch_id, course_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const semester = await Semester.create({
      code,
      batch_id,
      course_id,
    });
    await semester.save();
    if (semester) {
      res.status(201).json(new ApiResponse(201, "Semester added successfully", semester));
    } else {
      res.status(500).json(new ApiResponse(500, "Error : Failed to add semester to database"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to add semester to database", error.message);
  }
};

// Update Semesters
const updateSemester = async (req, res) => {
  try {
    const { code, batch_id, course_id } = req.body;
    [code, batch_id, course_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const semester = await Semester.findByIdAndUpdate(req.params.id, { code, batch_id, course_id }, { new: true });
    if (semester) {
      res.status(200).json(new ApiResponse(200, "Semester updated successfully", semester));
    } else {
      res.status(404).json(new ApiResponse(404, "Semester not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to update semester in database", error.message);
  }
};

// Delete Semesters
const deleteSemester = async (req, res) => {
  try {
    const semester = await Semester.findByIdAndDelete(req.params.id);
    if (semester) {
      res.status(200).json(new ApiResponse(200, "Semester deleted successfully", semester));
    } else {
      res.status(404).json(new ApiResponse(404, "Semester not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to delete semester from database", error.message);
  }
};

// Export
export {
  getAllSemesters,
  getSemester,
  addSemester,
  updateSemester,
  deleteSemester,
};