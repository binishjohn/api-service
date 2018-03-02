const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");

class Server {
  constructor() {
    this.server = express();
  }
  create(configuration) {
    this.server.set("env", configuration.env);
    this.server.set("port", configuration.port);
    this.server.set("hostname", configuration.hostname);
    this.server.use(bodyParser.json());
    routes.init(this.server);
  }
  start() {
    const hostname = this.server.get("hostname");
    const port = this.server.get("port");
    this.server.listen(port, () => {
      console.info(`API server listening on - http:// ${hostname}  :  ${port}`);
    });
  }
}
const server = new Server();
module.exports = server;
