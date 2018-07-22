'use strict';

const t = require('tap');

const { temperature } = require('../../converters/temperature');

const example = x => x + 1;

t.plan(2);

t.test('example', (t) => {
  t.plan(1);
  t.equal(example(10), 11);
});

t.test('temperature converter', (t) => {
  t.end();
});
