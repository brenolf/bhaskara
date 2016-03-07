module.exports = function en(number) {
  if (number < 100 && number >= 10) {
    return [parseInt(number / 10), 10, number % 10];
  }

  if (number < 1000 && number >= 100 && number % 100 === 0) {
    return [parseInt(number / 100), 100];
  }

  return number;
};
