const first = (mass) => {
    return Math.floor(mass / 3) - 2
}

const second = (mass) => {
    const requiredFuel = first(mass)

    if (requiredFuel <= 0) {
        return 0
    }

    return second(requiredFuel) + requiredFuel 
}

exports.first = first
exports.second = second
