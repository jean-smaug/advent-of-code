const {
  partOne,
  partTwo
} = require("./day3");

describe("2017 -- DAY 1", () => {
  it("PART 1 -- should make the sum if the next digit is the same", () => {
    expect(partOne("1")).toBe(0);
    expect(partOne("2")).toBe(1);
    expect(partOne("7")).toBe(2);
    expect(partOne("12")).toBe(3);
    expect(partOne("23")).toBe(2);
    expect(partOne("368078")).toBe(371);
  });

  it("PART 2 -- should make the sum if the digit around are the same", () => {
    // go to OEIS
  });
});