import userModel from "../models/userModel.js";

// @desc get all users || GET /api/v1/user
export const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find();

    // Map through the users array to exclude password from each user
    const usersWithoutPassword = users.map((user) => {
      const { password: userPassword, ...userWithoutPassword } =
        user.toObject();
      return userWithoutPassword;
    });

    console.log("All users", usersWithoutPassword);
    res.status(200).json({
      success: true,
      message: "All users",
      users: usersWithoutPassword,
    });
  } catch (error) {
    console.log("Error in getting all users", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// @desc get single user || GET /api/v1/user/:id
export const getSingleUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    // Exclude password from the user object
    const { password: userPassword, ...userWithoutPassword } = user.toObject();
    console.log("Single user", userWithoutPassword);
    res.status(200).json({
      success: true,
      message: "Single user",
      userWithoutPassword,
    });
  } catch (error) {
    console.log("Error in getting single user", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error no user found",
      error: error.message,
    });
  }
};

// @desc update user || PUT /api/v1/user/:id
export const updateUserController = async (req, res) => {
  try {
    //find user
    const user = await userModel.findById({ _id: req.body.id });
    // validate
    if (!user) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    //update
    const { username, address, phone } = req.body;
    if (username) user.username = username;
    if (address) user.address = address;
    if (phone) user.phone = phone;

    // save
    await user.save();

    res.status(200).json({
      success: true,
      message: "User successfully Updated ",
      user,
    });
  } catch (error) {
    console.log("Error in updating user Api", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Erroor in update API",
      error: error.message,
    });
  }
};

//@desc reset user password  || put  /api/v1/user/resetPassword
export const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    if (!email || !newPassword || !answer) {
      return res.status(500).json({
        success: false,
        message: "please provide all required fields",
      });
    }
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "user not found or invalid answer",
      });
    }

    //hash password
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();

    user.password = undefined;
    res.status(200).json({
      success: true,
      message: "password reset successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "reset password api",
      error,
    });
  }
};

// @desc delete user || DELETE /api/v1/user/deletePasswrod
export const deleteUserControler = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete({ _id: req.body.id });
    console.log("Deleted user", user);
    res.status(200).json({
      success: true,
      message: "user deleted",
      user,
    });
  } catch (error) {
    console.log("Error in deleting user", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error no user found",
      error: error.message,
    });
  }
};
