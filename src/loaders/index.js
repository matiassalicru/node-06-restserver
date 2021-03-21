const ExpressServer = require("./server/expressServer");
const config = require("../config/index");

module.exports = async () => {
  const server = new ExpressServer();
  console.log("Express loader");

  server.start();
  console.log(`########################################`);
  console.log(`Server listening on port: ${config.port} ${config.api.prefix}`);
  console.log(`########################################`);
};
