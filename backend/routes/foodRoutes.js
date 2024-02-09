import express from "express";
import {
  createFoodController,
  deleteFoodController,
  getAllFoodController,
  getSingleFoodController,
  updateFoodController,
} from "../controllers/foodController.js";

const router = express.Router();

router.post("/new-food", createFoodController);
router.get("/getAll-food", getAllFoodController);
router.get("/single-food/:id", getSingleFoodController);
router.put("/update-food/:id", updateFoodController);
router.delete("/delete-food/:id", deleteFoodController);

export default router;
