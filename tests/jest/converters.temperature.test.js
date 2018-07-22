'use strict';

const { temperature } = require('../../converters/temperature');

const example = x => x + 1;

describe('example', () => {

  it('should work', () => {
    expect(example(10)).toBe(11);
  });

});

describe('temperature converter', () => {
});
