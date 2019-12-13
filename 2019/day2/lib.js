const first = (line) => {
    let opCodes = line.split(",").map(Number)

    for (const stringIndex in opCodes) {
        const index = Number(stringIndex)
        const opCode = opCodes[index]
        
        const firstNumberIndex = opCodes[index + 1]
        const secondNumberIndex = opCodes[index + 2]
        const thirdNumberIndex = opCodes[index + 3]
        
        if(opCode === 1) {
            opCodes[thirdNumberIndex] = opCodes[firstNumberIndex] + opCodes[secondNumberIndex]
        }

        if(opCode === 2) {
            opCodes[thirdNumberIndex] = opCodes[firstNumberIndex] * opCodes[secondNumberIndex]
        }
    }

    return opCodes.join()
}

const second = (mass) => {}

exports.first = first
exports.second = second
