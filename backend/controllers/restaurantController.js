import ResturantModel from "../models/resturantModel.js";

// @desc create resturant || POST /api/v1/resturant
export const createResturantController = async (req, res) => {
  try {
    const {
      name,
      profile,
      menu,
      time,
      pickup,
      delivery,
      isopen,
      rating,
      zipcode,
      coords,
    } = req.body;

    const newResturant = new ResturantModel({
      name,
      profile,
      menu,
      time,
      pickup,
      delivery,
      isopen,
      rating,
      zipcode,
      coords,
    });

    await newResturant.save();

    console.log("Resturant created", newResturant);
    res.status(201).json({
      success: true,
      message: "Resturant created",
      newResturant,
    });
  } catch (error) {
    console.log("Error in creating resturant", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error in createing resturant",
      error: error.message,
    });
  }
};

// @desc get all resturants || GET /api/v1/resturant
export const getAllResturantsController = async (req, res) => {
  try {
    const resturants = await ResturantModel.find();
    if (!resturants) {
      return res.status(404).json({
        success: false,
        message: "Resturants Not Found",
      });
    }

    console.log("All resturants", resturants);
    res.status(200).json({
      success: true,
      message: "All resturants",
      totalResturants: resturants.length,
      resturants,
    });
  } catch (error) {
    console.log("Error in getting all resturants", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error to get all resturant",
      error: error.message,
    });
  }
};

// @desc get single resturant || GET /api/v1/resturant/:id
export const getSingleResturantController = async (req, res) => {
  try {
    const resturant = await ResturantModel.findById({ _id: req.params.id });
    if (!resturant) {
      return res.status(404).json({
        success: false,
        message: "Resturant Not Found",
      });
    }

    console.log("Single resturant", resturant);
    res.status(200).json({
      success: true,
      message: "Single resturant",
      resturant,
    });
  } catch (error) {
    console.log("Error in getting single resturant", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error no resturant found",
      error: error.message,
    });
  }
};

// @desc update resturant || PUT /api/v1/resturant/:id

export const updateResturantController = async (req, res) => {
  try {
    //find resturant
    const resturant = await ResturantModel.findById({ _id: req.params.id });
    // validate
    if (!resturant) {
      res.status(404).json({
        success: false,
        message: "resturant not found",
      });
    }
    // update
    Object.assign(resturant, req.body);
    // save
    await resturant.save();
    console.log("resturant updated", resturant);
    res.status(200).json({
      success: true,
      message: "resturant updated",
      resturant,
    });
  } catch (error) {
    console.log("Error in updating resturant", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// @desc delete resturant || DELETE /api/v1/resturant/:id

export const deleteResturantController = async (req, res) => {
  try {
    //find resturant
    const resturant = await ResturantModel.findByIdAndDelete({
      _id: req.params.id,
    });
    // validate
    if (!resturant) {
      res.status(404).json({
        success: false,
        message: "resturant not found or wrong restro ID",
      });
    }
    // delete
    console.log("resturant deleted", resturant);
    res.status(200).json({
      success: true,
      message: "resturant deleted",
      resturant,
    });
  } catch (error) {
    console.log("Error in deleting resturant", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error delete api",
      error: error.message,
    });
  }
};

// @desc get resturant by zipcode || GET /api/v1/resturant/zipcode/:zipcode

// export const getResturantByZipcodeController = async (req, res) => {
//   try {
//     const resturants = await Resturant.find({ zipcode: req.params.zipcode });

//     if (!resturants) {
//       return res.status(404).json({
//         success: false,
//         message: "Resturant Not Found",
//       });
//     }

//     console.log("Single resturant", resturants);
//     res.status(200).json({
//       success: true,
//       message: "Single resturant",
//       resturants,
//     });
//   } catch (error) {
//     console.log("Error in getting single resturant", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error no resturant found",
//       error: error.message,
//     });
//   }
// };
