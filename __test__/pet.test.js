const Pet = require("../src/pet");

describe("constructor", () => {
  it("has a initial age of 0", () => {
    const pet = new Pet("Gibbly");

    expect(pet.age).toEqual(0);
  });
});
