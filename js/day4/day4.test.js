const { partOne, partTwo } = require("./day4");

describe("2017 -- DAY 4", () => {
  it("PART 4 --", () => {
    expect(partOne("aa bb cc dd ee")).toBe(true);
    expect(partOne("aa bb cc dd aa")).toBe(false);
    expect(partOne("aa bb cc dd aaa")).toBe(true);
  });

  it("PART 2 -- should make the sum if the digit around are the same", () => {
    // go to OEIS
  });
});
