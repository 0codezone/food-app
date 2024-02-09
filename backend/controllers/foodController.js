import Food from "../models/foodModel.js";
import foodModel from "../models/foodModel.js";

export const createFoodController = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    } = req.body;

    if (!name || !description || !price || !category || !resturant) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required fields.",
      });
    }

    const newFood = await foodModel.create({
      name,
      description,
      price,
      image,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    });

    await newFood.save();
    res.status(201).json({
      success: true,
      message: "New Food item created successfully.",
      data: newFood,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "An error occurred while creating food item. Please try again.",
      error,
    });
  }
};

// ---------------------------------------
// get all food items

export const getAllFoodController = async (req, res) => {
  try {
    const allFood = await foodModel.find();
    res.status(200).json({
      success: true,
      message: "All food items fetched successfully.",
      data: allFood,
    });
  } catch (error) {
    console.log(eroor, "error getting all food items");
    res.status(400).json({
      success: false,
      message:
        "An error occurred while getting all food items. Please try again.",
      error,
    });
  }
};

// ---------------------------------------
// get single food item

export const getSingleFoodController = async (req, res) => {
  try {
    const singleFood = await foodModel.findById(req.params.id);
    if (!singleFood) {
      return res.status(404).json({
        success: false,
        message: "Food item not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Food item fetched successfully.",
      data: singleFood,
    });
  } catch (error) {
    console.log(error, "error getting single food item");
    res.status(400).json({
      success: false,
      message:
        "An error occurred while getting single food item. Please try again.",
      error,
    });
  }
};

// ---------------------------------------
// update food item

export const updateFoodController = async (req, res) => {
  try {
    //find resturant
    const food = await foodModel.findById({ _id: req.params.id });
    // validate
    if (!food) {
      res.status(404).json({
        success: false,
        message: "food not found",
      });
    }
    // update
    Object.assign(food, req.body);
    // save
    await food.save();
    console.log("food updated", food);
    res.status(200).json({
      success: true,
      message: "food updated",
      food,
    });
  } catch (error) {
    console.log(error, "error updating food item");
    res.status(400).json({
      success: false,
      message: "An error occurred while updating food item. Please try again.",
      error,
    });
  }
};

// ---------------------------------------
// delete food item

export const deleteFoodController = async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.params.id);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Food item deleted successfully.",
    });
  } catch (error) {
    console.log(error, "error deleting food item");
    res.status(400).json({
      success: false,
      message: "An error occurred while deleting food item. Please try again.",
      error,
    });
  }
};
