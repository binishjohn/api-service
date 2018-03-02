const server = require("./server");
const config = require("./configuration");

server.create(config);
server.start();
