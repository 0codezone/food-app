import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    profile: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/128/64/64572.png",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
