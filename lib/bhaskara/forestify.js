var mergeTrees = function mergeTrees(factors, forest) {
  var LENGTH = factors.length;

  if (LENGTH < 2) {
    return;
  }

  var j = LENGTH - 1;
  var factor = factors[j];
  var tree = forest[j];
  var i;

  for (i = j - 1; i >= 0; i--) {
    if (factor < factors[i]) {
      break;
    }
  }

  i++;

  if (i === j) {
    return;
  }

  factors.splice(i, j - i);

  var unity = {
    factor: 1,
    subtrees: tree.subtrees
  };

  tree.subtrees = forest.splice(i, j - i);

  tree.subtrees.push(unity);
};

module.exports = function forestify(array) {
  var forest = [];

  var LENGTH = array.length;

  var acc = 0;

  var factors = [];

  for (var i = 0; i < LENGTH; i++) {
    var n = array[i];

    if (n % 10 === 0 && n !== 0) {
      factors.push(n);

      forest.push({
        factor: n,
        subtrees: acc
      });

      mergeTrees(factors, forest);

      acc = 0;
    } else {
      acc += n;
    }
  }

  forest.push({
    factor: 1,
    subtrees: acc
  });

  return forest;
};
