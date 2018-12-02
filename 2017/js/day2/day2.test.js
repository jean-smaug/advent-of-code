const { partOne, partTwo } = require("./day2");

describe("2017 -- DAY 2", () => {
  it("PART 1 -- ", () => {
    partOne("fixture1.txt", response => {
      expect(response).toBe(18);
    });
  });

  it("PART 2 --", () => {
    partTwo("fixture2.txt", response => {
      expect(response).toBe(9);
    });
  });
});
