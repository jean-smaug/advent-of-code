exports.partOne = puzzle => {
  const words = puzzle.split(" ").sort();

  const equal = words.filter((word, key, array) => {
    return word !== array[key - 1];
  });

  return equal.length === words.length;
};

exports.partTwo = puzzle => {};
