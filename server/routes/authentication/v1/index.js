const express = require("express");
const LocationCtrl = require("../../../controllers/apis/location/index");

// const router = express.Router();
// router.route("/location").get((req, res) => {
//   const Location = new LocationCtrl();
//   Location.getLocation()
//     .then((result) => {
//       res.status(200).send(result);
//     })
//     .catch((error) => {
//       res.status(505).send(error);
//     });
// });
// module.exports = router;

const router = express.Router();
router.use("/location", LocationCtrl);

module.exports = router;
