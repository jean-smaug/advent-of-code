exports.partOne = puzzle => {
  let map = [];
  const directions = {
    right: {
      direction: "right",
      nextDireaction: "up"
    },
    up: {
      direction: "up",
      nextDireaction: "left"
    },
    left: {
      direction: "left",
      nextDireaction: "down"
    },
    down: {
      direction: "down",
      nextDireaction: "right"
    }
  };
  let currentDirection = directions.right;
  let newLineLength = 1;
  let numberOfIteration = 1;
  for (let i = 1; i <= puzzle; i++) {
    let { direction, nextDireaction } = currentDirection;

    map.push({
      direction,
      value: i
    });

    if (numberOfIteration === newLineLength) {
      if (direction === "up") {
        newLineLength += 2;
      } else if (direction === "right") {
        newLineLength += 1;
      }
      numberOfIteration = 0;
      currentDirection = directions[nextDireaction];
    }

    numberOfIteration++;
  }

  return 0;
};

exports.partTwo = puzzle => {};
