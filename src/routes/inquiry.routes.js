import { Router } from "express";
import {
  addInquiry,
  deleteInquiry,
  getAllInquiries,
  getInquiry,
  updateInquiry,
  searchInquiryByName,
} from "../controllers/inquiry.controller.js";


// Define the router for the Inquiry model
const router = Router();

router
  .route("/")
  .get(getAllInquiries)
  .post(addInquiry);

router
  .route("/:id")
  .get(getInquiry)
  .put(updateInquiry)
  .delete(deleteInquiry);


router.route("/search/:name").get(searchInquiryByName);
// Export the router
export default router;