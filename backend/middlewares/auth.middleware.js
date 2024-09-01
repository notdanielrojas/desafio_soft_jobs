const { verifyDecodeToken } = require("../utils/token.utils");

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  try {
    const email = verifyDecodeToken(authorizationHeader);
    req.user = { email };
    next();
  } catch (error) {
    console.log("Middleware error:", error);
    return res
      .status(error.code || 401)
      .json({ error: error.message || "Token inválido" });
  }
};

module.exports = { authMiddleware };
