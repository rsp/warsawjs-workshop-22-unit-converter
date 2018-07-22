'use strict';

const { currency } = require('../../converters/currency');

const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

describe('example', () => {

  it('should work', async () => {
              expect(await example(10)).toBe(11);  
  });

});

describe('currency converter', () => {
});
