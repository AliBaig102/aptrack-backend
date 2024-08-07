import { Router } from "express";
import {
  addBatch,
  deleteBatch,
  getAllBatches,
  getBatch,
  updateBatch,
} from "../controllers/batch.controller.js";


// Define the router for the Course model
const router = Router();

router
  .route("/")
  .get(getAllBatches)
  .post(addBatch);

router
  .route("/:id")
  .get(getBatch)
  .put(updateBatch)
  .delete(deleteBatch);

// Export the router
export default router;