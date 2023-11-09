const Pet = require("../src/pet");

describe("constructor", () => {
  it("has a initial age of 0", () => {
    const pet = new Pet("Gibbly");

    expect(pet.age).toEqual(0);
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("Gibbly");

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
});

describe("feed", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Gibbly");

    pet.age = 30;

    expect(pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});
