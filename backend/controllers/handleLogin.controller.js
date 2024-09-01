const jwt = require("jsonwebtoken");
const { verifyCredentials } = require("../models/login.model");
const { handleErrors } = require("../controllers/handleCodes.controller");

const handleCredentials = async (req, res) => {
  try {
    const { email, password } = req.body;
    await verifyCredentials(email, password);
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    const errorResponse = handleErrors(error.code || "500");
    res.status(errorResponse.status).send(errorResponse.message);
  }
};

module.exports = { handleCredentials };
