//Question 4
// Rewrite using the ternary/conditional operator
let a = 2; // Declare a
let b = 3; // Declare b
let result = `${a} + ${b} is `; // Initialize result
result += a + b < 10 ? "less than 10" : "greater than 10"; // evaluates whether a + b is less than 10:

// Output using ternary operator:
console.log(result); // Output: "2 + 3 is less than 10"

//Testing With Other Values:
a = 5; // Avoid Redeclarations: To reassign a&b drop let.
b = 6;
result = `${a} + ${b} is `; // Reset result
result += a + b < 10 ? "less than 10" : "greater than 10";

// Output for other values:
console.log(result); // Output: 5 + 6 is greater than 10

//What Does the += Operator Do?
// The += operator is shorthand for appending or adding values to the existing variable:
result = "Hello"; // Initialize result
result += " World"; // Same as: result = result + " World";
console.log(result); // Output: "Hello World"

let num = 10; // Declare a number variable
num += 5; // Same as: num = num + 5;
console.log(num); // Output: 15
