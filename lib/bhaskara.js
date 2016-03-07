var getNumberArray = require('./bhaskara/getNumberArray.js');
var forestify = require('./bhaskara/forestify.js');
var traverse = require('./bhaskara/traverse.js');

module.exports = function bhaskara(string, locale, mapper) {
  var numbers = getNumberArray(string, locale, mapper);

  return traverse(forestify(numbers))
};
