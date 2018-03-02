const express = require("express");
const v1AuthController = require("./v1");

const router = express.Router();
router.use("/v1", v1AuthController);
module.exports = router;
