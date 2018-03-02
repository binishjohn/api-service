const express = require("express");
const locationService = require("../../../services/location");

const router = express.Router();
router.get("/", locationService.getLocation());
module.exports = router;
