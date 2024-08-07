import { Router } from "express";
import {
  addSession,
  deleteSession,
  getAllSessions,
  getSession,
  updateSession,
} from "../controllers/session.controller.js";


// Define the router for the Session model
const router = Router();

router
  .route("/")
  .get(getAllSessions)
  .post(addSession);

router
  .route("/:id")
  .get(getSession)
  .put(updateSession)
  .delete(deleteSession);

// Export the router
export default router;