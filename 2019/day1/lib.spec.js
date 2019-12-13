const solution = require("./lib.js")

it("should resolve puzzle", () => {
    expect(solution(12)).toBe(2)
    expect(solution(14)).toBe(2)
    expect(solution(1969)).toBe(654)
    expect(solution(100756)).toBe(33583)
});