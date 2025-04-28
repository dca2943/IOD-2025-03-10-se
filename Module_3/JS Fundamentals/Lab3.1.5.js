// a) Rewrite the following function using function expression syntax
const getGreeting = function (name) {
  return "Hello " + name + "!";
};
//Instead of using the function declaration syntax (function getGreeting(name)), we assign an anonymous function (a function without a name) to a variable getGreeting.

console.log(getGreeting("Dayana")); // Output: "Hello Dayana!"

// b) arrow function syntax.
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Dayana")); // Output: Hello, Dayana!

const sayHello = () => "Hello, World!";
console.log(sayHello()); // Output: Hello, World!

const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
