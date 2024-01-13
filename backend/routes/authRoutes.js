import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authControllers.js";

const router = express.Router();

// @desc    Register a new user || POST /api/v1/auth/register
router.post("/register", registerController);

// @desc    Login user || POST /api/v1/auth/login
router.get("/login", loginController);

export default router;
