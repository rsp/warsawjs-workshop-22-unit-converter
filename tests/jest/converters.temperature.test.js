'use strict';

const { temperature } = require('../../converters/temperature');

const example = x => x + 1;

describe('example', () => {
  it('should work', () => {
    expect(example(10)).toBe(11);
  });
});

describe('temperature', () => {

  describe('converter', () => {

    it('should be defined', () => {
      expect(temperature).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof temperature).toBe('function');
    });

    it('should return a number', () => {
      const x = temperature(100, 'C', 'K');
      expect(typeof x).toBe('number');
    });

    it('should return good number', () => {
      const x = temperature(100, 'C', 'K');
      expect(x).toBe(373.15);
      expect(temperature(773.15, 'K', 'C')).toBe(500);
    });

  });

});
