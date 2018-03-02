const apiRoute = require("./apis");
const authRoute = require("./authentication");

const initilize = (server) => {
  server.use("/api", apiRoute);
  server.use("/authentication", authRoute);
};

module.exports = {
  init: initilize
};
