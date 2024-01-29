import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import userRoute from "./routes/userRoute.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
import connectDB from "./config/db.js";

//rest object
const app = express();

//configurations
dotenv.config();

//database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoutes);
app.use("/api/v1/category", categoryRoute);

app.get("/", (req, res) => {
  res.send("server created");
});

//server running
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
