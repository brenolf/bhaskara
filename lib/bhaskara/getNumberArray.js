var path = require('path');
var flatten = require('array-flatten');

module.exports = function getNumberArray(string, locale, mapper) {
  var dict = locale;
  var cb = mapper;

  if (typeof locale === 'string' || !locale) {
    dict = (locale || 'en');

    cb = require(path.join(__dirname, './mapper/', dict + '.js'));
    dict = require(path.join(__dirname, './locale/', dict + '.json'));
  }

  if (typeof cb !== 'function') {
    cb = require('./mapper/identity.js');
  }

  var array = string
    .toLowerCase()
    .replace(/\-/g, ' ')
    .replace(/[^a-z\u00E0-\u00FC\s]/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');

  var LENGTH = array.length;

  var numbers = [];

  for (var i = 0; i < LENGTH; i++) {
    if (array[i] in dict) {
      var n = cb(dict[array[i]]);

      numbers.push(n);
    }
  }

  return flatten(numbers);
};
