'use strict';

const request = require('request-promise');

const base = 'http://api.nbp.pl/api/exchangerates/rates/a';
const date = '2018-01-02';
const format = 'format=json';
const json = true;

// Cache to avoid making multiple requests for the same currency,
// initially empty:
const cache = {};

// Helper function to make requests to the API version with caching:
const rate = async (unit) => {
  try {
    if (cache[unit]) {
      return cache[unit];
    }
    const url = `${base}/${unit.toLowerCase()}/${date}/?${format}`;
    const response = await request({ url, json });
    const value = response.rates[0].mid;
    cache[unit] = value;
    return value;
  } catch (err) {
    return null;
  }
};

// Two helper functions so that we can write:
// usd() instead of rate('usd') and:
// eur() instead of rate('eur')
const usd = () => rate('usd');
const eur = () => rate('eur');

// General function to convert between any currencies:
const currency = async (value, from, to) => {
  if (from === to) {
    return value;
  }
  if (from === 'PLN' && to === 'USD') {
    return value / await usd();
  }
  if (from === 'USD' && to === 'PLN') {
    return value * await usd();
  }
  if (from === 'PLN' && to === 'EUR') {
    return value / await eur();
  }
  if (from === 'EUR' && to === 'PLN') {
    return value * await eur();
  }
  if (from === 'USD' && to === 'EUR') {
    return value * await usd() / await eur();
  }
  if (from === 'EUR' && to === 'USD') {
    return value * await eur() / await usd();
  }
  return undefined;
};

module.exports = {
  currency,
};
