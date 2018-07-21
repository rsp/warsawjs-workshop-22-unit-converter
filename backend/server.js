const express = require('express');
const app = express();
const { join } = require('path');

const swagger = require('swagger-ui-express');
const doc = require('./swagger.json');
 
const { temperature } = require('../lib/temperature');
const { currency } = require('../lib/currency');

const host = 'localhost';
const port = process.env.PORT || 3333;

console.log(doc.info.title);
console.log(doc.info.description);

app.listen(port, () => {
  console.log(`Frontend: http://${host}:${port}/`);
  console.log(`API Docs: http://${host}:${port}/doc`);
});

app.use(express.static(join(__dirname, '..', 'frontend')));

doc.host=`${host}:${port}`;
app.use('/doc', swagger.serve, swagger.setup(doc));

app.get('/api/temperature', (req, res) => {
  const { fromValue, fromUnit, toUnit } = req.query;
  const result = temperature(+fromValue, fromUnit, toUnit);
  const response = { type: 'temperature', fromValue, fromUnit, toUnit, result };
  console.log(response);
  res.json(response);
});

app.get('/api/currency', async (req, res) => {
  const { fromValue, fromUnit, toUnit } = req.query;
  const result = await currency(+fromValue, fromUnit, toUnit);
  const response = { type: 'currency', fromValue, fromUnit, toUnit, result };
  console.log(response);
  res.json(response);
});