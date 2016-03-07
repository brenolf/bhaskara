#!/usr/bin/env node

var bhaskara = require('../bhaskara.js');

var input = process.argv.slice(2).join('');

console.log(bhaskara(input));
