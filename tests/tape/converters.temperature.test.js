'use strict';

const test = require('tape');

const { temperature } = require('../../converters/temperature');

const example = x => x + 1;

test('example', (t) => {
  t.plan(1);
  t.equal(example(10), 11);
});

test('temperature converter', (t) => {
  t.end();
});
