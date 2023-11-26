require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  ServerConfig: require("./server-config"),
  Logger: require("./logger-config"),
};
