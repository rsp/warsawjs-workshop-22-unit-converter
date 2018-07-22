'use strict';

const test = require('tape');

const { currency } = require('../../converters/currency');

const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

test('example', async (t) => {
  t.plan(1);
  t.equal(await example(10), 11);
});

test('currency converter', (t) => {
  t.end();
});
