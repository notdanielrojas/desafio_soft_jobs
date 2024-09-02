const validateCredentialsAtRegister = (req, res, next) => {
  const { email, password, rol, lenguage } = req.body;
  if (!email || !password || !rol || !lenguage) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};

const validateCredentialsAtLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};

module.exports = { validateCredentialsAtRegister, validateCredentialsAtLogin };
