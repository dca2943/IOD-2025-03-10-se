import express from "express";
import {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
} from "../controllers/itineraryController.js";

const router = express.Router();

router.post("/", createDestination);
router.get("/", getAllDestinations);
router.get("/:id", getDestinationById);
router.put("/:id", updateDestination);
router.delete("/:id", deleteDestination);

export default router;
