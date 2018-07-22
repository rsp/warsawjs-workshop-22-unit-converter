'use strict';

const split = require('split');
const logform = require('logform');
const { combine, timestamp, label, printf } = logform.format;
const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  format: combine(
    label({ label: 'uc' }),
    timestamp(),
    printf(nfo => {
      return `${nfo.timestamp} [${nfo.label}] ${nfo.level}: ${nfo.message}`;
    })
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
