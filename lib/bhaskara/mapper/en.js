module.exports = function en(number) {
  if (number < 100 && number >= 10) {
    return [parseInt(number / 10), 10, number % 10];
  }

  return number;
};
