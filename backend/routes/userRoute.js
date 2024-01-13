import express from "express";
import {
  deleteUserControler,
  getAllUsersController,
  getSingleUserController,
  updateUserController,
} from "../controllers/userControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

//get all users

router.get("/", getAllUsersController);

//get single user
router.get("/getUser", authMiddleware, getSingleUserController);

//update user
router.put("/updateUser", authMiddleware, updateUserController);

//delete user
router.delete("/deleteUser", authMiddleware, deleteUserControler);

export default router;
