const { handleCredentials } = require("../controllers/handleLogin.controller");
const { Router } = require("express");
const router = Router();

router.post("/", async (req, res) => {
  try {
    await handleCredentials(req, res);
  } catch (error) {
    const errorResponse = handleErrors(error.code || 500);
    res.status(errorResponse.status).send(errorResponse.message);
  }
});

module.exports = router;
