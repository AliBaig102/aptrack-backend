import Course from "../models/course.model.js";
import ApiErrors from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js";

//Get All Courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    if (courses.length > 0) {
      res.status(200).json(new ApiResponse(200, "Courses retrieved successfully", courses));
    } else {
      res.status(404).json(new ApiResponse(404, "Courses not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve courses from database", error.message);
  }
};

// Get Course
const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.status(200).json(new ApiResponse(200, "Course retrieved successfully", course));
    } else {
      res.status(404).json(new ApiResponse(404, "Course not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to retrieve course from database", error.message);
  }
};

// Add Course
const addCourse = async (req, res) => {
  try {
    const { name, code } = req.body;
    [name, code].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : All fields are required");
      }
    });
    const course = await Course.create({
      name,
      code,
    });
    await course.save();
    if (course) {
      res.status(201).json(new ApiResponse(201, "Course added successfully", course));
    } else {
      res.status(500).json(new ApiResponse(500, "Error : Failed to add course to database"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to add course to database", error.message);
  }
};

// Update Course
const updateCourse = async (req, res) => {
  try {
    const { name, code } = req.body;
    [name, code].forEach((val) => {
      if (!val) {
        throw new ApiErrors(400, "Error : Name and code are required");
      }
    });
    const course = await Course.findByIdAndUpdate(req.params.id, { name, code }, { new: true });
    if (course) {
      res.status(200).json(new ApiResponse(200, "Course updated successfully", course));
    } else {
      res.status(404).json(new ApiResponse(404, "Course not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to update course in database", error.message);
  }
};

// Delete Course
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (course) {
      res.status(200).json(new ApiResponse(200, "Course deleted successfully", course));
    } else {
      res.status(404).json(new ApiResponse(404, "Course not found"));
    }
  } catch (error) {
    new ApiErrors(500, "Error : Failed to delete course from database", error.message);
  }
};

// Export the functions
export {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
}