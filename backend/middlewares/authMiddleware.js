import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "unauthorized",
        });
      } else {
        req.body.id = decoded.id;
        next();
      }
    });
  } catch (error) {
    console.log("please provide auth token");
    res.status(401).json({
      success: false,
      message: "please provide auth token",
      error,
    });
  }
};
