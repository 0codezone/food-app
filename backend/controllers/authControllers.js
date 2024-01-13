import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// @desc    REGISTER a new user || POST /api/auth/register
export const registerController = async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;

    //validation
    if (!username || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //hash password

    //check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      console.log("User already exists", existingUser);
      return res.status(400).json({
        success: false,
        message: "User already exists with this email , please login",
      });
    }

    //hash password
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
    });
    newUser.save();

    //send response
    console.log("newUser REgistered successfully", newUser);
    res.status(201).json({
      success: true,
      message: "newUser Regidtered successfully",
      data: newUser,
    });
  } catch (error) {
    console.log("Error in REgistration", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error register",
      error: error.message,
    });
  }
};

// -------------------------------------************-------------------------------
// @desc    LOGIN user || POST /api/auth/login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check if user exists or not
    const user = await userModel.findOne({ email });
    if (!user) {
      console.log("User does not exists", user);
      return res.status(400).json({
        success: false,
        message: "User does not exists , please register first",
      });
    }

    //compare password with hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      console.log("Password does not match");
      return res.status(400).json({
        success: false,
        message: "Password does not match",
      });
    }

    //create token
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Send response without the password field
    // const { password: userPassword, ...userWithoutPassword } = user.toObject();
    user.password = undefined;

    //send response
    console.log("User logged in successfully", user);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token: jwtToken,
      data: user,
    });
  } catch (error) {
    console.log("Error in Login", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error login ",
      error: error.message,
    });
  }
};
