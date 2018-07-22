'use strict';

const f2c = value => (value - 32) * 5 / 9;
const c2f = value => value * 9 / 5 + 32;
const k2c = value => value - 273.15;
const c2k = value => value + 273.15;
const k2f = value => c2f(k2c(value));
const f2k = value => c2k(f2c(value));

const temperature = (value, from, to) => {
  if (from === to) {
    return value;
  }
  if (from === 'C' && to === 'F') {
    return c2f(value);
  }
  if (from === 'F' && to === 'C') {
    return f2c(value);
  }
  if (from === 'C' && to === 'K') {
    return c2k(value);
  }
  if (from === 'K' && to === 'C') {
    return k2c(value);
  }
  if (from === 'F' && to === 'K') {
    return f2k(value);
  }
  if (from === 'K' && to === 'F') {
    return k2f(value);
  }
};

module.exports = {
  temperature,
  f2c,
  c2f,
  k2c,
  c2k,
  k2f,
  f2k,
};
