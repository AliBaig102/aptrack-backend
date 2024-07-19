import { Router } from "express";

import {
  addCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} from "../controllers/course.controller.js";


// Define the router for the Course model
const router = Router();

router
  .route("/")
  .get(getAllCourses)
  .post(addCourse);

router
  .route("/:id")
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);


// Export the router
export default router;