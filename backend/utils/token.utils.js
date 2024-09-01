/* const jwt = require("jsonwebtoken");

const verifyDecodeToken = (authorizationHeader) => {
  if (!authorizationHeader) {
    throw { code: 401, message: "No token provided" };
  }

  const token = authorizationHeader.split(" ")[1];
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
 */