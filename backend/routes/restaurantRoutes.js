import express from "express";
const router = express.Router();
import {
  createResturantController,
  //   deleteResturantController,
  //   getAllResturantsController,
  //   getResturantByZipcodeController,
  //   getSingleResturantController,
  //   updateResturantController,
} from "../controllers/restaurantController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

router.post("/createRest", authMiddleware, createResturantController);
// router.get("/", getAllResturantsController);
// router.get("/", getSingleResturantController);
// router.get("/", getResturantByZipcodeController);
// router.get("/", deleteResturantController);
// router.get("/", updateResturantController);

export default router;
