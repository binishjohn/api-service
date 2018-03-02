const express = require("express");
const locationCtrl = require("../../../controllers/apis/location");
const storeCtrl = require("../../../controllers/apis/store");

const router = express.Router();
router.use("/location", locationCtrl);
router.use("/store", storeCtrl);
module.exports = router;
