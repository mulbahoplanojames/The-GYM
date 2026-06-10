import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_KEY = process.env.JWT_SECRET;

export default (request, response, next) => {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return response.status(401).json({ message: "Auth Failed: No token" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return response
        .status(401)
        .json({ message: "Auth Failed: Malformed header format" });
    }

    const decoded = jwt.verify(token, JWT_KEY);
    request.userData = {
      userId: decoded.userId,
      role: decoded.role,
      email: decoded.email,
    };

    next();
  } catch (error) {
    console.error("Auth middleware error", error);
    return response
      .status(401)
      .json({ message: "Auth Failed", error: error.message });
  }
};
