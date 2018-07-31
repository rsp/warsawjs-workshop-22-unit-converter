'use strict';

const test = require('tape');

const mock = require('mock-require');

const data = require('../fixtures/fixture1.json');

mock('request-promise', async () => {
  return data;
});

const { currency } = require('../../converters/currency');

const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

test('example', async (t) => {
  t.plan(1);
  t.equal(await example(10), 11);
});

test('currency converter', async (t) => {
  t.plan(1);
  t.equal(await currency(1000, 'USD', 'PLN'), 120);
});
