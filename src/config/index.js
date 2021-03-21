const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  port: process.env.PORT,
  api: {
    //Se suele definir la versión de nuestra API
    prefix: "/api/v1",
  },
};
