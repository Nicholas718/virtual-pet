const MAXIMUM_FITNESS = 10;
const MAXIMUM_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.children = [];
  this.babies = [];
  this.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  this.feedPet = function () {
    if (this.hunger - 3 >= 0) {
      this.hunger -= 3;
    }
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    } else {
      this.hunger = 0;
    }
  };
}

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.fitness + 4 <= 10) {
    this.fitness += 4;
  }
  if (this.fitness > MAXIMUM_FITNESS) this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype.checkUp = function () {
  if (this.fitness <= 3 && this.hunger >= 5) {
    return "I need walking and feeding";
  }
  if (this.fitness <= 3) {
    return "I need a walk";
  }
  if (this.hunger >= 5) {
    return "I am hungry";
  }
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else {
    return "I feel great";
  }
};

Pet.prototype.adoptChild = function (child) {
  this.children.push(child);
};

Pet.prototype.haveBaby = function (babyName) {
  this.babies.push(new Pet(babyName));
};

Pet.prototype.isAlive = function () {
  return this.age < 30 && this.hunger < 10 && this.fitness > 0;
};

module.exports = Pet;
