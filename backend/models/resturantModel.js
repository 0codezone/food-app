import mongoose from "mongoose";

const resturantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    profile: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/128/64/64572.png",
    },
    menu: {
      type: Array,
    },
    time: {
      type: String,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isopen: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },

    zipcode: {
      type: String,
    },
    coords: {
      id: {
        type: String,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
      latitudeDelta: {
        type: Number,
      },
      longitudeDelta: {
        type: Number,
      },
      address: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Resturant = mongoose.model("Resturant", resturantSchema);
export default Resturant;
