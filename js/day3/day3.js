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
      if (direction === "up" || direction === "down") {
        newLineLength += 1;
      }
      numberOfIteration = 0;
      currentDirection = directions[nextDireaction];
    }

    numberOfIteration++;
  }

  const filteredItem = map.filter(item => item.value === parseInt(puzzle));

  const total = map.reduce(
    (accumulator, { direction }) => {
      switch (direction) {
        case "up":
          accumulator.vertical += 1;
          return accumulator;

        case "down":
          accumulator.vertical -= 1;
          return accumulator;

        case "right":
          accumulator.horizontal += 1;
          return accumulator;

        case "left":
          accumulator.horizontal -= 1;
          return accumulator;
      }
    },
    { vertical: 0, horizontal: 0 }
  );

  const result = Math.abs(total.horizontal) + Math.abs(total.vertical) - 1;
  return result;
};

exports.partTwo = puzzle => {};
