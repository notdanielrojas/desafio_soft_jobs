const jwt = require("jsonwebtoken");

const verifyDecodeToken = (authorizationHeader) => {
  if (typeof authorizationHeader !== "string") {
    throw { code: 401, message: "No token provided" };
  }

  const parts = authorizationHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw { code: 401, message: "Invalid token format" };
  }

  const token = parts[1];
  if (!token) {
    throw { code: 401, message: "Invalid token" };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.email) {
      throw { code: 401, message: "Invalid token or email not present" };
    }
    return decoded.email;
  } catch (error) {
    console.log("Error verifying or decoding token:", error);
    throw { code: 401, message: "Invalid or expired token" };
  }
};

module.exports = { verifyDecodeToken };
