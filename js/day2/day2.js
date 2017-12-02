const fs = require("fs");
const { resolve } = require("path");
const readline = require("readline");

exports.partOne = (puzzlePath, callback) => {
  let total = 0;

  const rl = readline.createInterface({
    input: fs.createReadStream(resolve(__dirname, puzzlePath)),
    crlfDelay: Infinity
  });

  rl.on("line", line => {
    let minor = 0;
    let major = 0;
    const numbers = line.split("\t");
    numbers.forEach(n => {
      let number = Number(n);
      if (number > major) {
        major = number;
      }
      if (number < minor || minor === 0) {
        minor = number;
      }
    });

    total += Number(major) - Number(minor);
  });

  rl.on("close", () => {
    callback(total);
  });
};

exports.partTwo = (puzzlePath, callback) => {
  let total = 0;

  const rl = readline.createInterface({
    input: fs.createReadStream(resolve(__dirname, puzzlePath)),
    crlfDelay: Infinity
  });

  rl.on("line", line => {
    const numbers = line.split("\t");
    numbers.forEach(n => {
      const number = Number(n);

      numbers.forEach(n2 => {
        const number2 = Number(n2);
        if (number % number2 === 0 && number !== number2) {
          total += number / number2;
        }
      });
    });
  });

  rl.on("close", () => {
    callback(total);
  });
};
