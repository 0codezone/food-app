import express from "express";
const router = express.Router();
import {
  createResturantController,
  getAllResturantsController,
  getSingleResturantController,
  //   deleteResturantController,
  //   getResturantByZipcodeController,
  //   updateResturantController,
} from "../controllers/restaurantController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

router.post("/createRest", authMiddleware, createResturantController);
router.get("/getallRest", getAllResturantsController);
router.get("/singleRest/:id", getSingleResturantController);
// router.get("/", getResturantByZipcodeController);
// router.get("/", deleteResturantController);
// router.get("/", updateResturantController);

export default router;
