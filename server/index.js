const https = require("https");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const morgan = require("morgan");
const helmet = require("helmet");

class Server {
  constructor() {
    this.server = express();
  }
  create(configuration) {
    this.server.set("env", configuration.env);
    this.server.set("port", configuration.port);
    this.server.set("hostname", configuration.hostname);
    this.server.set("jwt_token", "1234567890qwertyuiop");
    this.server.use(bodyParser.json());
    this.server.use(morgan("combined"));
    this.server.use(helmet());
    routes.init(this.server);
  }
  start() {
    const hostname = this.server.get("hostname");
    const port = this.server.get("port");
    https
      .createServer(
        {
          key: fs.readFileSync("./keys/server.key"),
          cert: fs.readFileSync("./keys/server.crt"),
          ca: fs.readFileSync("./keys/ca.crt"),
          requestCert: true,
          rejectUnauthorized: false
        },
        this.server
      )
      .listen(port, () => {
        console.info(
          `API server listening on - http:// ${hostname}  :  ${port}`
        );
      });
  }
}
const server = new Server();
module.exports = server;
