exports.partOne = puzzle => {
  let digit = "";
  let nextDigit = "";
  let sum = 0;
  let puzzleLength = puzzle.length;

  for (let i = 0; i < puzzleLength; i++) {
    digit = puzzle.charAt(i);
    nextDigit = puzzle.charAt(i + 1);

    if (puzzleLength - 1 === i) {
      nextDigit = puzzle.charAt(0);
    }

    if (digit === nextDigit) {
      sum += Number(digit);
    }
  }
  return sum;
};

exports.partTwo = () => {
  return 3;
};
