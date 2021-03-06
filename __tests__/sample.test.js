//describe groups together related tests
describe("sample test 101", () => {
  // the it() and test() command are the same thing
  it("works as expected", () => {
    expect(1).toEqual(1);
    const age = 100;
    expect(age).toEqual(100);
  });

  it("handles ranges just fine", () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  it("makes a list of dog names", () => {
    const dogs = ["snickers", "hugo"];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain("snickers");
  });
});
