const express = require("express");
const LocationRoutes = require("../../../controllers/apis/location");

const router = express.Router();
router.use("/location", LocationRoutes);
module.exports = router;
