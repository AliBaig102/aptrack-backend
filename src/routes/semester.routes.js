import { Router } from "express";
import {
  addSemester,
  deleteSemester,
  getAllSemesters,
  getSemester,
  updateSemester,
}
  from "../controllers/semester.controller.js";


// Define the router for the Course model
const router = Router();

router
  .route("/")
  .get(getAllSemesters)
  .post(addSemester);

router
  .route("/:id")
  .get(getSemester)
  .put(updateSemester)
  .delete(deleteSemester);

// Export the router
export default router;
