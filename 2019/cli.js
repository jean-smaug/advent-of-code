const { argv } = process
const { first, second } = require(`./day${argv[2]}/lib`)
const puzzle = require("fs").readFileSync(`./day${argv[2]}/puzzle.txt`).toString().trim()

const result = puzzle.split("\n").reduce((acc, current) => acc + second(current), 0)
console.log(result)
