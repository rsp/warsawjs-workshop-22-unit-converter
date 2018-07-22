'use strict';

const split = require('split');
const { createLogger, transports, format } = require('winston');

const {
  combine, timestamp, label, printf,
} = format;

const fmt = printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`);

const logger = createLogger({
  format: combine(
    label({
      label: 'UC',
    }),
    timestamp(),
    fmt,
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: false,
      colorize: false,
      timestamp: true,
    }),
    new transports.File({
      level: 'debug',
      filename: 'server.log',
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: false,
      colorize: false,
      timestamp: true,
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

logger.emitErrs = false;

logger.stream = split().on('data', message => logger.info(message));

module.exports = {
  logger,
};
