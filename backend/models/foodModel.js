import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A food must have a name"],
    },
    description: {
      type: String,
      required: [true, "A food must have a description"],
    },
    price: {
      type: Number,
      required: [true, "A food must have a price"],
    },
    image: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/128/64/64572.png",
    },
    foodTags: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "A food must have a category"],
    },
    code: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    resturant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resturant",
      required: [true, "A food must belong to a resturant"],
    },
    rating: {
      type: Number,
      default: 4,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Foods", foodSchema);
export default Food;
