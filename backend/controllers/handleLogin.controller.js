const jwt = require("jsonwebtoken");
const { verifyCredentials } = require("../models/login.model");

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
    res.status(error.code || 500).send(error.message || "Server error");
  }
};

module.exports = { handleCredentials };
