const { first, second } = require("./lib.js")

it("should resolve part one", () => {
    expect(first(12)).toBe(2)
    expect(first(14)).toBe(2)
    expect(first(1969)).toBe(654)
    expect(first(100756)).toBe(33583)
});

it("should resolve part two", () => {
    expect(second(14)).toBe(2)
    expect(second(1969)).toBe(966)
    expect(second(100756)).toBe(50346)
});
