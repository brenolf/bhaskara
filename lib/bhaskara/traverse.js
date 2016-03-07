var explore = function explore(tree) {
  if (typeof tree.subtrees === 'number') {
    return tree.factor * tree.subtrees;
  }

  var children = tree.subtrees.reduce(function(acc, subtree) {
    return acc + explore(subtree);
  }, 0);

  return tree.factor * children;
};

module.exports = function traverse(forest) {
  return explore({
    factor: 1,
    subtrees: forest
  });
};
