const { registerUser, getUserByEmail } = require("../models/user.model");

const handleRegisterUser = async (req, res) => {
  try {
    const user = req.body;
    await registerUser(user);
    res.send("User register successfully");
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error.message || "Server error");
  }
};

const handleGetUser = async (req, res) => {
  const userEmail = req.user.email;
  try {
    const user = await getUserByEmail(userEmail);
    if (user) {
      res.status(200).json([user]);
    } else {
      res.status(404).json({ message: "User not find" });
    }
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ message: "Error fetching user" });
  }
};

module.exports = { handleGetUser, handleRegisterUser };
