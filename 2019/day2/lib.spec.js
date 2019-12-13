const { first, second } = require("./lib.js")

it.only("should resolve part one", () => {
    expect(first("1,0,0,0,99")).toBe("2,0,0,0,99")
    expect(first("2,3,0,3,99")).toBe("2,3,0,6,99")
    expect(first("2,4,4,5,99,0")).toBe("2,4,4,5,99,9801")
    expect(first("1,1,1,4,99,5,6,0,99")).toBe("30,1,1,4,2,5,6,0,99")
});

it("should resolve part two", () => {
    expect(second(14)).toBe(2)
    expect(second(1969)).toBe(966)
    expect(second(100756)).toBe(50346)
});
