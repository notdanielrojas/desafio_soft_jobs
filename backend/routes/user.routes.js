const { handleErrors } = require("../utils/codes.utils");
const {
  handleRegisterUser,
  handleGetUser,
} = require("../controllers/handleUser.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { Router } = require("express");
const {
  validateCredentialsAtRegister,
} = require("../middlewares/validate.middleware");
const router = Router();

router.post("/", validateCredentialsAtRegister, async (req, res) => {
  try {
    await handleRegisterUser(req, res);
  } catch (error) {
    const errorResponse = handleErrors(error.code || 500);
    res.status(errorResponse.status).send(errorResponse.message);
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    await handleGetUser(req, res);
  } catch (error) {
    const errorResponse = handleErrors(error.code || 500);
    res.status(errorResponse.status).send(errorResponse.message);
  }
});

module.exports = router;
