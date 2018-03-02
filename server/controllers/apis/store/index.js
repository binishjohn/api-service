const express = require("express");
const locationService = require("../../../services/store");

const router = express.Router();
router.get("/", locationService.getStores());
module.exports = router;
