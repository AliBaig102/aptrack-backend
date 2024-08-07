import ApiErrors from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js";
import Session from "../models/session.model.js";

// Get All Sessions
const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    if (sessions.length > 0) {
      res.status(200).json(new ApiResponse(200, "Sessions retrieved successfully", sessions));
    } else {
      res.status(404).json(new ApiResponse(404, "Sessions not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve sessions from database", error.message);
  }
};

// Get Single Session
const getSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (session) {
      res.status(200).json(new ApiResponse(200, "Session retrieved successfully", session));
    } else {
      res.status(404).json(new ApiResponse(404, "Session not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve session from database", error.message);
  }
};

// Add Session
const addSession = async (req, res) => {
  try {
    const { name, course_id, semester_id } = req.body;
    [name, course_id, semester_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const session = await Session.create({
      name,
      course_id,
      semester_id,
    });
    await session.save();
    if (session) {
      res.status(201).json(new ApiResponse(201, "Session added successfully", session));
    } else {
      res.status(500).json(new ApiResponse(500, "Error : Failed to add session to database"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to add session to database", error.message);
  }
};

// Update Session
const updateSession = async (req, res) => {
  try {
    const { name, course_id, semester_id } = req.body;
    [name, course_id, semester_id].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const session = await Session.findByIdAndUpdate(req.params.id, { name, course_id, semester_id }, { new: true });
    if (session) {
      res.status(200).json(new ApiResponse(200, "Session updated successfully", session));
    } else {
      res.status(404).json(new ApiResponse(404, "Session not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to update session in database", error.message);
  }
};

// Delete Session
const deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (session) {
      res.status(200).json(new ApiResponse(200, "Session deleted successfully", session));
    } else {
      res.status(404).json(new ApiResponse(404, "Session not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to delete session from database", error.message);
  }
};

// Export the functions
export {
  getAllSessions,
  getSession,
  addSession,
  updateSession,
  deleteSession,
};