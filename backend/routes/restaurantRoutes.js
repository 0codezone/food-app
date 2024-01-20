import express from "express";
const router = express.Router();
import {
  createResturantController,
  getAllResturantsController,
  getSingleResturantController,
  deleteResturantController,
  updateResturantController,
  //   getResturantByZipcodeController,
} from "../controllers/restaurantController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

router.post("/createRest", createResturantController);
router.get("/getallRest", authMiddleware, getAllResturantsController);
router.get("/singleRest/:id", authMiddleware, getSingleResturantController);
router.delete("/deleteRest/:id", authMiddleware, deleteResturantController);
router.get("/updateRest/:id", updateResturantController);
// router.get("/", getResturantByZipcodeController);

export default router;
