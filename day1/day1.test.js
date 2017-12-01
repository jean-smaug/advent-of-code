const { partOne, partTwo } = require("./index");

describe("2017 -- DAY 1", () => {
  it("PART 1 -- should make the sum if the next digit is the same", () => {
    expect(partOne("1122")).toBe(3);
    expect(partOne("1111")).toBe(4);
    expect(partOne("1234")).toBe(0);
    expect(partOne("91212129")).toBe(9);
  });

  it("PART 2 -- should make the sum if the digit around are the same", () => {
    expect(partTwo("1212")).toBe(6);
    expect(partTwo("1221")).toBe(0);
    expect(partTwo("123425")).toBe(4);
    expect(partTwo("123123")).toBe(12);
    expect(partTwo("12131415")).toBe(4);
  });
});
