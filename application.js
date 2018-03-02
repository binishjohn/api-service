"use strict";
const server = require("./application");
const config = require("./configuration");
server.create(config);
server.start();
