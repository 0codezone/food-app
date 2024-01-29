import categoryModel from "../models/categoryModel.js";

// create category controller
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    // validation
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    // check if category with the same name already exists
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category with the same name already exists",
      });
    }

    const newCategory = new categoryModel({ name });
    await newCategory.save();

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      newCategory,
    });
  } catch (error) {
    console.error("Error creating category API", error);
    res.status(500).json({
      success: false,
      message: "Error creating category API",
      error,
    });
  }
};

// get all categories controller
export const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    if (!categories) {
      return res.status(404).json({
        success: false,
        message: "Categories not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      categories,
    });
  } catch (error) {
    console.error("Error getting all categories API", error);
    res.status(500).json({
      success: false,
      message: "Error getting all categories API",
      error,
    });
  }
};

// update category controller
export const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // validation
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    // check if category with the same name already exists
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category with the same name already exists",
      });
    }

    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category API", error);
    res.status(500).json({
      success: false,
      message: "Error updating category API",
      error,
    });
  }
};

// delete category controller
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await categoryModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      deletedCategory,
    });
  } catch (error) {
    console.error("Error deleting category API", error);
    res.status(500).json({
      success: false,
      message: "Error deleting category API",
      error,
    });
  }
};
