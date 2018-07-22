'use strict';

const express = require('express');
const { json } = require('body-parser');
const { join } = require('path');
const swagger = require('swagger-ui-express');
const morgan = require('morgan');

const doc = require('./swagger.json');

const { logger } = require('./logger');

const { temperature } = require('../converters/temperature');
const { currency } = require('../converters/currency');

const host = 'localhost';
const port = process.env.PORT || 3333;

const app = express();

app.use(json());
app.disable('x-powered-by');
app.use(morgan('short', logger));

logger.info(`Starting ${doc.info.title}`);

app.listen(port, () => {
  logger.info(`Frontend: http://${host}:${port}/`);
  logger.info(`API Docs: http://${host}:${port}/doc`);
});

app.use(express.static(join(__dirname, '..', 'frontend')));

doc.host = `${host}:${port}`;
app.use('/doc', swagger.serve, swagger.setup(doc));

app.get('/api/temperature', (req, res) => {
  const { fromValue, fromUnit, toUnit } = req.query;
  const result = temperature(+fromValue, fromUnit, toUnit);
  const response = {
    type: 'temperature', fromValue, fromUnit, toUnit, result,
  };
  logger.info(JSON.stringify(response));
  res.json(response);
});

app.get('/api/currency', async (req, res) => {
  const { fromValue, fromUnit, toUnit } = req.query;
  const result = await currency(+fromValue, fromUnit, toUnit);
  const response = {
    type: 'currency', fromValue, fromUnit, toUnit, result,
  };
  logger.info(JSON.stringify(response));
  res.json(response);
});
