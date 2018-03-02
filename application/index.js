"use strict";
const express = require("express");
const bodyParser = require("body-parser");
class Server {
    constructor() {
        this.server = express();
    }
    create(configuration) {
        let routes = require("./routes/routes.js");
        this.server.set("env", configuration.env);
        this.server.set("port", configuration.port);
        this.server.set("hostname", configuration.hostname);
        this.server.use(bodyParser.json());
        routes.init(this.server);
    }
    start() {
        let hostname = this.server.get("hostname");
        let port = this.server.get("port");
        this.server.listen(port, function() {
            console.log(
                "API server listening on - http://" + hostname + ":" + port
            );
        });
    }
}
const server = new Server();
module.exports = server;