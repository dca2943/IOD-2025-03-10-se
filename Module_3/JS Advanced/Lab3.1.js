//1. makeCounter below is a decorator function which creates and returns a function that increments a counter.
// a) Create two independent counters
function makeCounter() {
  let currentCount = 0; // Start from 0
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

// Independent counters
let counter1 = makeCounter(); // Counter1
let counter2 = makeCounter(); // Counter2

// Test Counter1
console.log("Counter1 Test:");
counter1(); // Output: 1
counter1(); // Output: 2

// Test Counter2
console.log("Counter2 Test:");
counter2(); // Output: 1
counter2(); // Output: 2

// -------------------------------------------------

// b) b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
function makeCounterWithStart(startFrom) {
  let currentCount = startFrom; // Initialize from the given value
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter3 = makeCounterWithStart(5); // Starts from 5
let counter4 = makeCounterWithStart(10); // Starts from 10

// Test counters
console.log("Counter3 Test:");
counter3(); // Output: 6
counter3(); // Output: 7

console.log("Counter4 Test:");
counter4(); // Output: 11
counter4(); // Output: 12

// -------------------------------------------------

// c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

function makeCounterWithIncrement(startFrom, incrementBy) {
  let currentCount = startFrom; // Initialize from the given value
  return function () {
    currentCount += incrementBy; // Increment by the specified value
    console.log(currentCount);
    return currentCount;
  };
}

let counter5 = makeCounterWithIncrement(5, 2); // Starts from 5, increments by 2
let counter6 = makeCounterWithIncrement(10, 3); // Starts from 10, increments by 3

// Test counters
console.log("Counter5 Test:");
counter5(); // Output: 7
counter5(); // Output: 9

console.log("Counter6 Test:");
counter6(); // Output: 13
counter6(); // Output: 16

// -------------------------------------------------

//2. The following delayMsg function is intended to be used to delay printing a message until some time has passed.

// a) What order will the four tests below print in? Why?

//This message will be printed after a delay: #4: Not delayed at all
//This message will be printed after a delay: #3: Delayed by 0ms
//This message will be printed after a delay: #2: Delayed by 20ms
//This message will be printed after a delay: #1: Delayed by 100ms
//Why? JavaScript uses an event loop. Synchronous code (like the direct call to delayMsg) runs first. Functions scheduled with setTimeout are added to the event queue and executed only after the synchronous code completes.

//b) Rewrite delayMsg as an arrow function
const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
setTimeout(delayMsg, 10000, "#5: Delayed by 10 seconds");

//d) Use clearTimeout to prevent the fifth test from printing at all.
const timeoutId = setTimeout(delayMsg, 10000, "#5: Delayed by 10 seconds");
clearTimeout(timeoutId); // Prevents the fifth test from printing

// -------------------------------------------------

//3. 'Debouncing'
//a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.
function debounce(func) {
  let timeout;
  return function () {
    clearTimeout(timeout); // Clear the previous timer
    timeout = setTimeout(func, 1000); // Set a new timer for 1000ms
  };
}

// Example usage
function printMe() {
  console.log("printing debounced message");
}

printMe = debounce(printMe);

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
// Only the last call (after 300ms) will execute after 1000ms of no further calls

//b) Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms
function debounce(func, ms) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout); // Clear the previous timer
    timeout = setTimeout(() => func(...args), ms); // Schedule with arguments
  };
}

// Example
function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000); // Debounce with a 1000ms delay

// Fire off calls to test
setTimeout(() => printMe("#1: Delayed by 100ms"), 100);
setTimeout(() => printMe("#2: Delayed by 200ms"), 200);
setTimeout(() => printMe("#3: Delayed by 300ms"), 300);
// Only the last call will execute after 1000ms of inactivity

//The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

function printFibonacciTimeouts(limit) {
  let a = 0,
    b = 1,
    count = 1; // Initialize the sequence and counter
  console.log(b); // Print the first number

  function nextFibonacci() {
    if (count >= limit) {
      return; // Stop once the limit is reached
    }
    const next = a + b;
    console.log(next);
    a = b;
    b = next;
    count++;
    setTimeout(nextFibonacci, 1000); // Schedule the next call
  }

  setTimeout(nextFibonacci, 1000); // Start the recursive timeout
}

// Example:
printFibonacciTimeouts(10); // Prints 10 Fibonacci numbers

// -------------------------------------------------

//5. The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?
// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
// b) Change the year for the car by creating a clone of the original and overriding it
// c) Does the delayed description() call use the original values or the new values from
// b)? Why?
// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

// a)
setTimeout(() => car.description(), 200);

// b)
let carClone = { ...car, year: 2023 };
carClone.description(); // This car is a Porsche 911 from 2023

// c)
setTimeout(() => carClone.description(), 200); // Uses carClone values

// d)
setTimeout(car.description.bind(car), 200); // Always uses the original car values

// e)
let carClone2 = { ...car, make: "Ferrari" };
setTimeout(car.description.bind(car), 200); // Still uses original `car` values

// -------------------------------------------------

// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.
// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

// Adding delay to Function.prototype
Function.prototype.delay = function (ms) {
  const func = this; // Reference to the original function
  return function (...args) {
    // Accept any number of arguments
    setTimeout(() => func.apply(this, args), ms); // Use apply to pass arguments
  };
};

// Examples with different functions
function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

function add(a, b, c) {
  console.log(a + b + c);
}

// Test
multiply.delay(700)(2, 3, 4, 5); // Prints 120 after 700 milliseconds
add.delay(1000)(1, 2, 3); // Prints 6 after 1000 milliseconds

// -------------------------------------------------

// 7. The following DigitalClock class uses an interval to print the time every second once started, until stopped.
// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.
// b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// Example: PrecisionClock
const preciseClock = new PrecisionClock("Precise clock:", 500);
preciseClock.start();

// AlarmClock class
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    const date = new Date();
    const [hours, mins] = [
      String(date.getHours()).padStart(2, "0"),
      String(date.getMinutes()).padStart(2, "0"),
    ];
    const currentTime = `${hours}:${mins}`;
    console.log(`${this.prefix} ${currentTime}`);

    if (currentTime === this.wakeupTime) {
      console.log("Wake Up");
      this.stop();
    }
  }
}

// Example: AlarmClock
const alarmClock = new AlarmClock("Alarm clock:", "07:05");
alarmClock.start();

// -------------------------------------------------

//8. Using the following starter code, create a decorator function to validate function arguments as strings. Test it by decorating the given orderItems function below.
// a) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn to ensure that it is a string, throwing an error if not
// b) Extend orderItems to use the ... rest operator, allowing multiple item name arguments, and include them all in the returned string
// c) Extend the decorator function to validate as strings all arguments passed to fn
// d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments

// Decorator function
function validateStringArg(fn) {
  return function (...args) {
    if (!args.every((arg) => typeof arg === "string")) {
      throw new Error("All arguments must be strings");
    }
    return fn(...args);
  };
}

// Original function
function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

// Decorated function
const validatedOrderItems = validateStringArg(orderItems);

// Tests
try {
  console.log(validatedOrderItems("Apple Watch", "iPhone")); // Works
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItems("Laptop", 123)); // Throws an error
} catch (error) {
  console.error(error.message);
}

// -------------------------------------------------

// 9. We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) and returns a promise we can use via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise, and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay); // Resolve for even delays
      } else {
        reject(delay); // Reject for odd delays
      }
    }, delay * 1000);
  });
}

// Test the randomDelay function
randomDelay()
  .then((delay) => console.log(`Success: Delay of ${delay} seconds`))
  .catch((delay) =>
    console.error(`Error: Unable to handle a delay of ${delay} seconds`)
  );

// -------------------------------------------------
// 10.Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response. The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.)
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.

import fetch from "node-fetch";

async function fetchURLData(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

// Valid URL
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

// Invalid URL
fetchURLData("https://invalid.url")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

async function fetchMultipleURLs(urls) {
  const results = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error(
          `Request failed with status ${response.status} for URL: ${url}`
        );
      }
    })
  );
  return results;
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://invalid.url",
];

fetchMultipleURLs(urls)
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
