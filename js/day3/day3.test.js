const { partOne, partTwo } = require("./day3");

describe("2017 -- DAY 1", () => {
  it("PART 1 -- should make the sum if the next digit is the same", () => {
    expect(partOne("1")).toBe(0);
    expect(partOne("12")).toBe(3);
    expect(partOne("23")).toBe(2);
    expect(partOne("1024")).toBe(31);
  });

  it("PART 2 -- should make the sum if the digit around are the same", () => {
    // expect(partTwo("1212")).toBe(6);
    // expect(partTwo("1221")).toBe(0);
    // expect(partTwo("123425")).toBe(4);
    // expect(partTwo("123123")).toBe(12);
    // expect(partTwo("12131415")).toBe(4);
  });
});
