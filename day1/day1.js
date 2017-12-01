exports.partOne = puzzle => {
  let digit = "";
  let nextDigit = "";
  let sum = 0;
  const puzzleLength = puzzle.length;

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

exports.partTwo = puzzle => {
  let digit = "";
  let nextDigit = "";
  let sum = 0;
  const puzzleLength = puzzle.length;
  const semiPuzzleLength = puzzleLength / 2;

  for (let i = 0; i < puzzleLength; i++) {
    digit = puzzle.charAt(i);
    nextDigit = puzzle.charAt(i + semiPuzzleLength);

    if (puzzleLength - 1 === i) {
      nextDigit = puzzle.charAt(0);
    }

    if (digit === nextDigit) {
      sum += Number(digit);
    }
  }
  return sum;
};
