const config = require('../../config/index');
const winston = require('winston');

const transports = [];

transports.push(
  new winston.transports.Console()
);

const LoggerInstance = winston.createLogger({
  level: config.log.level, 
  format: winston.format.simple(), 
  transports
})

module.exports = LoggerInstance;
