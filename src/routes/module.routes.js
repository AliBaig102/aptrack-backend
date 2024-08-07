import { Router } from "express";
import {
  addModule,
  deleteModule,
  getAllModules,
  getModule,
  updateModule,
} from "../controllers/module.controller.js";


// Define the router for the Module model
const router = Router();

router
  .route("/")
  .get(getAllModules)
  .post(addModule);

router
  .route("/:id")
  .get(getModule)
  .put(updateModule)
  .delete(deleteModule);

// Export the router
export default router;