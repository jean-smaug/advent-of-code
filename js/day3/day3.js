exports.partOne = puzzle => {
  let map = []
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
    },
  }
  let direction = directions.right
  for (let i = 1; i <= puzzle; i++) {
    map.push({
      direction: direction.direction,
      value: i
    })
    if (true) {
      direction = directions[direction.nextDireaction]
    }
  }
  console.log(map)
  return 0;
};

exports.partTwo = puzzle => {};