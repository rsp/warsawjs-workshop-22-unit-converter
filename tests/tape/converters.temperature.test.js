'use strict';

const test = require('tape');

const { temperature } = require('../../converters/temperature');

const example = x => x + 1;

test('example', (t) => {
  t.plan(1);
  t.equal(example(10), 11, 'should be ok');
});

test('temperature', (t) => {

  t.test('converter', (t) => {

    t.ok(temperature, 'should be defined');

    t.equal(typeof temperature, 'function', 'should be a function');

    const x = temperature(100, 'C', 'K');
    t.equal(typeof x, 'number', 'should return a number');

    t.equal(x, 373.15, 'should return good number');

    t.equal(temperature(773.15, 'K', 'C'), 500, 'should return good number');

    t.end();

  });

  t.end();

});
