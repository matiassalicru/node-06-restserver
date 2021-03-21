const express = require("express");
const morgan = require("morgan");
const config = require("../../config/index");

class ExpressServer {
  constructor() {
    //Instanstación de express server
    this.app = express();
    this.port = config.port;
    this.basePathUser = config.api.prefix;

    this._middleware();
    this._routes();
  }

  _middleware() {
    this.app.use(express.json());

    this.app.use(morgan("tiny"));
  }

  _routes() {
    this.app.head("/status", (req, res) => {
      res.status(200).end();
    });

    this.app.use(`${this.basePathUser}/users`, require("../../routes/users"));
  }

  async start() {
    this.app.listen(this.port, (error) => {
      if (error) {
        console.log(error);
        process.exit(1);
        return;
      }
    });
  }
}

module.exports = ExpressServer;
