import Calcul from "../src/Calcul";

describe("CalculTest", () => {
  it("should return 7", () => {
    let a: number = 3;
    let b: number = 4;
    let expected: number = 7;
    expect(Calcul.add(a, b)).toBe(expected);
  });
});
