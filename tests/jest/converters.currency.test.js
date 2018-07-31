'use strict';

const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

describe('example', () => {
  it('should work', async () => {
    expect(await example(10)).toBe(11);  
  });
});

// There are problems mocking requests with Jest
// See examples in other testing frameworks

describe('currency converter', async () => {

});
