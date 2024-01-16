import express from "express";
import {
  deleteUserControler,
  getAllUsersController,
  getSingleUserController,
  resetPasswordController,
  updatePasswordController,
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

//updarte user password
router.put("/updatePassword", authMiddleware, updatePasswordController);

//reset user Passord
router.post("/resetPassword", resetPasswordController);

//delete user
router.delete("/deleteUser", authMiddleware, deleteUserControler);

export default router;
