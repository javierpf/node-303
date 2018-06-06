#!/usr/bin/env node

const app = require("../app");
const debug = require("debug")("node-303:server");
const http = require("http");
const config = require("../config");
const sequelize = require("../data/sequelize");

const port = config.get('server:port');
app.set("port", port);

const server = http.createServer(app);

const connection = sequelize.sync();
connection.error(() =>
  console.error("Error stablishing connection with database")
);

connection.then(() => {
  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);
  console.log(`Connected to database and listening }`);
});

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
