"use strict";
const apiRoute = require("./apis");
const authRoute = require("./authentication");

initilize = server => {
  server.use("/api", apiRoute);
  server.use("/authentication", authRoute);
};

module.exports = {
  init: init
};
