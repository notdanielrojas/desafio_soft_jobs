const { registerUser, getUserByEmail } = require("../models/user.model");
const { handleErrors } = require("../controllers/handleCodes.controller");

const handleRegisterUser = async (req, res) => {
  try {
    const user = req.body;
    await registerUser(user);
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.log(error);
    const errorResponse = handleErrors(error.code || "500");
    res.status(errorResponse.status).send(errorResponse.message);
  }
};

const handleGetUser = async (req, res) => {
  const userEmail = req.user.email;
  try {
    const user = await getUserByEmail(userEmail);
    if (user) {
      res.status(200).json([user]);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error.message);
    const errorResponse = handleErrors(error.code || "500");
    res.status(errorResponse.status).send(errorResponse.message);
  }
};

module.exports = { handleGetUser, handleRegisterUser };
