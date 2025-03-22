// Function for addition +
function add(a, b) {
  let result = a + b;
  console.log(`The result of ${a} + ${b} is: ${result}`);
  return result;
}

// Function for subtraction -
function subtract(a, b) {
  let result = a - b;
  console.log(`The result of ${a} - ${b} is: ${result}`);
  return result;
}

// Function for multiplication *
function multiply(a, b) {
  let result = a * b;
  console.log(`The result of ${a} * ${b} is: ${result}`);
  return result;
}

// Function for division /
function divide(a, b) {
  if (b !== 0) {
    let result = a / b;
    console.log(`The result of ${a} / ${b} is: ${result}`);
    return result;
  } else {
    console.log("Error: Division by zero is not allowed.");
    return null;
  }
}

// Example
add(6, 2);
subtract(28, 20);
multiply(2, 4);
divide(16, 2);

// Function that takes the name of a person as an argument, and prints out “Hello Name" to the console.
function greet(name) {
  console.log(`Hello ${name}`);
}

// Example
greet("Ferris");
greet("Dayana");
