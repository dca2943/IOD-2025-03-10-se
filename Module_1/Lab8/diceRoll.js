// Gets the number of sides from the input field
function getDiceInput() {
  let sides = document.getElementById("numSides").value;
  return sides;
}

// Calls the dice roll function and updates the result in the HTML
function diceRollAndUpdate() {
  let sides = getDiceInput();
  let result = diceRoll(sides);
  document.getElementById("dice-result").innerText =
    "You have rolled a" + result;
}

// Rolls a dice with the given number of faces
function diceRoll(numberOfFaces) {
  return Math.floor(Math.random() * numberofFaces) + 1;
}

// Exports the functions
module.exports = {
  diceRoll,
  diceRollAndUpdate,
};
