const apiRoute = require("./apis");
const authRoute = require("./authentication");
const mwJWT = require("../middlewares/authentication");

const initilize = (server) => {
  server.use("/api/*", mwJWT);
  server.use("/api", apiRoute);
  server.use("/authentication", authRoute);
};

module.exports = {
  init: initilize
};
