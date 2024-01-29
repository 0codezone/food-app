import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  updateCategoryController,
} from "../controllers/categoryControllers.js";

const router = express.Router();

router.post("/createCat", createCategoryController);
router.get("/categories", getAllCategoriesController);
router.put("/updateCat/:id", updateCategoryController);
router.delete("/deleteCat/:id" , deleteCategoryController) ;

export default router;
