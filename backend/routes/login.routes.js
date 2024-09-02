const { handleCredentials } = require("../controllers/handleLogin.controller");
const { Router } = require("express");
const {
  validateCredentialsAtLogin,
} = require("../middlewares/validate.middleware");
const router = Router();
const { handleErrors } = require("../utils/codes.utils");

router.post("/", validateCredentialsAtLogin, async (req, res) => {
  try {
    await handleCredentials(req, res);
  } catch (error) {
    const errorResponse = handleErrors(error.code || 500);
    res.status(errorResponse.status).send(errorResponse.message);
  }
});

module.exports = router;
