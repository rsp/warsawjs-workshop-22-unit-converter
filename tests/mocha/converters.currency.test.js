'use strict';

const { expect } = require('chai');

const mock = require('mock-require');

const data = require('../fixtures/fixture1.json');

mock('request-promise', async () => {
  return data;
});

const { currency } = require('../../converters/currency');

const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

describe('example', async () => {
  it('should be ok', async () => {
    expect(await example(10)).to.equal(11);
  });
});

describe('currency converter', async () => {
  it('should convert correctly', async () => {
    expect(await currency(1000, 'USD', 'PLN')).to.equal(120);
  });
});
