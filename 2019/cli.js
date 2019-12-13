const { argv } = process
const lib = require(`./day${argv[2]}/lib`)
const puzzle = require("fs").readFileSync(`./day${argv[2]}/puzzle.txt`).toString().trim()

const result = puzzle.split("\n").reduce((acc, current) => acc + lib(current), 0)
console.log(result)
