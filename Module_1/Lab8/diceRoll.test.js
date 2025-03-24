const { diceRoll } = require("./diceRoll.js");

// Testing a single example
const result = rollDice(6);
if (result > 6 || result < 1) {
  throw Error("Invalid dice result " + result);
}

// Unit test: Testing dice sides from 1 to 100
for (let i = 1; i <= 100; i++) {
  let testResult = diceRoll(i);
  if (testResult < 1 || testResult > 1)
    // Corrected condition logic
    throw Error(`Invalid dice result " + testResult + "for max sides" i}`);
}

console.log("All tests passed!");
