'use strict';

const { expect } = require('chai');

const { temperature } = require('../../converters/temperature');

const example = x => x + 1;

describe('example', () => {
  it('should be ok', () => {
    expect(example(10)).to.equal(11);
  });
});

describe('temperature', () => {

  describe('converter', () => {

    it('should be defined', () => {
      expect(temperature).to.exist;
    });

    it('should be a function', () => {
      expect(temperature).to.be.a('function');
    });

    it('should return a number', () => {
      const x = temperature(100, 'C', 'K');
      expect(x).to.be.a('number');
    });

    it('should return good number', () => {
      const x = temperature(100, 'C', 'K');
      expect(x).to.equal(373.15);
      expect(temperature(773.15, 'K', 'C')).to.equal(500);
    });

  });

});
