const basketballGame = {
  score: 0, // Keeps track of the score
  fouls: 0, // Keeps track of the number of fouls
  freeThrow() {
    this.score++; // Add 1 point for a free throw
    return this; // Return the object to enable chaining
  },
  basket() {
    this.score += 2; // Add 2 points for a regular basket
    return this; // Return the object to enable chaining
  },
  threePointer() {
    this.score += 3; // Add 3 points for a three-pointer
    return this; // Return the object to enable chaining
  },
  incrementFouls() {
    this.fouls++; // Increment foul count
    return this; // Enable chaining by returning the object
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}, with ${this.fouls} fouls.`); // Display the current score &fouls
    return this; // Return the object to allow chaining
  },
  fullTime() {
    console.log(`Final score is ${this.score}, with ${this.fouls} fouls.`); // Display the current score &fouls
    return this; // Enable chaining by returning the object
  },
};

//modify each of the above object methods to enable function chaining as below:

basketballGame
  .basket() // +2 points
  .incrementFouls() // +1 foul
  .freeThrow() // +1 point
  .incrementFouls() // +1 foul
  .threePointer() // +3 points
  .halfTime() // Logs: "Halftime score is 6, with 2 fouls."
  .basket() // +2 points
  .incrementFouls() // +1 foul
  .fullTime(); // Logs: "Final score is 8, with 3 fouls."

// a) To modify the methods so that they can be "chained" together, each method must return the object (this). This allows the next method in the chain to operate on the same object.

// b) Add a new method to print the full time final score

// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages

// d) Test your object by chaining all the method calls together in different combinations.
