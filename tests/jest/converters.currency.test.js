'use strict';

// const mock = require('mock-require');

const data = require('./fixture1.json');

beforeEach(() => {
  jest.resetModules();
});

// mock('request-promise', async () => {
//   return data;
// });

const { currency } = require('../../converters/currency');

const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

describe('example', () => {

  it('should work', async () => {
    expect(await example(10)).toBe(11);  
  });

});

describe('currency converter', async () => {
  jest.doMock('request-promise', async () => {
    return data;
  });
  const result = await currency(10, 'USD', 'PLN');
  expect(result).toBe(1);
});
