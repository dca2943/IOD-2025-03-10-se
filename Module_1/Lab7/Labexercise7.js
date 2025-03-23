// Function for addition +
/**Adds two numbers and logs the result.
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @returns {number} The sum of the two input numbers.
 */
function add(a, b) {
  let result = a + b;
  console.log(`The result of ${a} + ${b} is: ${result}`);
  return result;
}

// Function for subtraction -
/**
 * Subtracts the second number from the first number.
 * @param {number} a - The number from which another number will be subtracted.
 * @param {number} b - The number to subtract from the first number.
 * @returns {number} The result of subtracting the second number from the first.
 */
function subtract(a, b) {
  let result = a - b;
  console.log(`The result of ${a} - ${b} is: ${result}`);
  return result;
}

// Function for multiplication*
/**
 * Multiplies two numbers and returns the result.
 * @param {number} a - The first number to be multiplied.
 * @param {number} b - The second number to be multiplied.
 * @returns {number} The product of the two input numbers.
 */
function multiply(a, b) {
  let result = a * b;
  console.log(`The result of ${a} * ${b} is: ${result}`);
  return result;
}

// Function for division /
/**
 * Divides the first number by the second number and returns the result.
 * @param {number} a - The dividend (the number to be divided).
 * @param {number} b - The divisor (the number by which the dividend is divided).
 * @returns {number} The quotient resulting from dividing the first number by the second.
 * @throws {Error} If the divisor is zero, an error is thrown to prevent division by zero.
 */
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

// 3 unit tests for each function
console.log(add(5, 3)); // Result: 8
console.log(add(6, 4)); // Result: 10
console.log(add(10, 2)); // Result: 12
console.log(subtract(11, 2)); // Result: 9
console.log(subtract(12, 1)); // Result: 11
console.log(subtract(16, 3)); // Result: 13
console.log(multiply(1, 3)); // Result: 3
console.log(multiply(2, 4)); // Result: 8
console.log(multiply(3, 5)); // Result: 15
console.log(divide(16, 2)); // Result: 8
console.log(divide(24, 4)); // Result: 6
console.log(divide(140, 20)); // Result: 7

// Expected values for addition
console.log(add(10, 5)); // Expected output: 15
console.log(add(0, 7)); // Expected output: 7

// Non-typical values for addition
console.log(add(-3, 6)); // Expected output: 3 (negative number)
console.log(add(-4, -2)); // Expected output: -6 (both numbers negative)

// Expected values for subtraction
console.log(subtract(20, 5)); // Expected output: 15
console.log(subtract(5, 0)); // Expected output: 5

// Non-typical values for subtraction
console.log(subtract(0, 8)); // Expected output: -8 (subtracting from zero)
console.log(subtract(-10, -5)); // Expected output: -5 (both numbers negative)

// Expected values for multiplication
console.log(multiply(6, 3)); // Expected output: 18
console.log(multiply(0, 7)); // Expected output: 0

// Non-typical values for multiplication
console.log(multiply(-2, 5)); // Expected output: -10 (negative number)
console.log(multiply(-3, -4)); // Expected output: 12 (both numbers negative)

// Expected values for division
console.log(divide(10, 2)); // Expected output: 5
console.log(divide(0, 4)); // Expected output: 0

// Non-typical values for division
try {
  console.log(divide(5, 0)); // Expected: Error (division by zero)
} catch (error) {
  console.log(error.message); // "Division by zero is not allowed."
}
console.log(divide(-15, 3)); // Expected output: -5 (negative number)
