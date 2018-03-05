const express = require("express");
const LocationCtrl = require("./location.controller");

const router = express.Router();
router.route("/").get((req, res) => {
  const Location = new LocationCtrl();
  Location.getLocation()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(505).send(error);
    });
});
module.exports = router;
