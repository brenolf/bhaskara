#!/usr/bin/env node

var bhaskara = require('../bhaskara.js');

var input = process.argv.slice(2).join(' ');

var locale = 'en';

if (process.argv[2] === '--locale') {
  locale = process.argv[3];
  input = process.argv.slice(4).join(' ');
}

console.log(bhaskara(input, locale));
