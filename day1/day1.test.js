const solution = require("./index");

describe("2017 -- DAY 1", () => {
  it("should make the sum if the next digit is the same", () => {
    expect(solution("1122")).toBe(3);
    expect(solution("1111")).toBe(4);
    expect(solution("1234")).toBe(0);
    expect(solution("91212129")).toBe(9);
  });
});
