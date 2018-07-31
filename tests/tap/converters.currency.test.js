'use strict';

const t = require('tap');

const { currency } = require('../../converters/currency');

const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

t.plan(2);

t.test('example', async (t) => {
  t.plan(1);
  t.equal(await example(10), 11);
});

t.test('currency converter', async (t) => {
  t.end();
});
