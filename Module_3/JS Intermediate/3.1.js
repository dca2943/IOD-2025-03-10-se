// 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

function ucFirstLetters(str) {
  return str
    .split(" ") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a string
}

// Testing the function with different strings
console.log(ucFirstLetters("los angeles")); // Output: Los Angeles
console.log(ucFirstLetters("new york city")); // Output: New York City
console.log(ucFirstLetters("Virginia")); // Output: Virginia
console.log(ucFirstLetters("California")); // Output: California

console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...

//2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise. b) Write another variant of the truncate function that uses a conditional operator.
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "..."; // Truncate and add ellipsis
  } else {
    return str; // Return the original string if it's within the max length
  }
}

const testStr = "This text will be truncated if it too long";

// Example
console.log(truncate("Hello, world!", 5)); // Output: Hello...
console.log(truncate("Goodbye, world!", 20)); // Output: Goodbye, world!

//3. Use the following animals array for the below tasks. Test each one by printing the result to the console.
const animals = ["Tiger", "Giraffe"]; //an array named animals containing two elements: 'Tiger' and 'Giraffe'
console.log(animals); //Using console.log(animals), you print the content of the animals array to the console [ 'Tiger', 'Giraffe' ]

//a) Add 2 new values to the end, using the push method
animals.push("Elephant", "Lion");
console.log(animals);

//b) Add 2 new values to the beginning, using the unshift method
animals.unshift("Panda", "Koala");
console.log(animals);

//c) Sort the values alphabetically, using the sort method
animals.sort();
console.log(animals);

//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2); // Calculate the middle index
  animals[middleIndex] = newValue; // Replace the middle value with newValue
  console.log(animals); // Log the updated array
}

replaceMiddleAnimal("Zebra");
// This will modify the animals array and replace the middle value.

//e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.
//This function uses the filter method to create a new array containing only those elements of animals (lowercase)

function findMatchingAnimals(beginsWith) {
  const lowerCaseBeginsWith = beginsWith.toLowerCase();

  // Filter the animals array to find matches
  const matchingAnimals = animals.filter((animal) =>
    animal.toLowerCase().startsWith(lowerCaseBeginsWith)
  );

  return matchingAnimals; // Return the new array
}

const result = findMatchingAnimals("T");
console.log(result); // Logs animals that start with 'T' ['Tiger']

//4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
function camelCase(cssProp) {
  return cssProp.replace(/-./g, (match) => match[1].toUpperCase());
}
const camelCased = camelCase("margin-left");
console.log(camelCase("margin-left")); // Output: marginLeft
console.log(camelCase("background-image")); // Output: backgroundImage
console.log(camelCase("display")); // Output: display

//b) **Create variants of the camelCase function that use different types of for loops, and
//c) **with and without the conditional operator.

//Using a for Loop with the Conditional Operator
function camelCase(cssProp) {
  const parts = cssProp.split("-");
  let result = "";
  for (let i = 0; i < parts.length; i++) {
    result +=
      i === 0
        ? parts[i] // Keep the first word unchanged
        : parts[i][0].toUpperCase() + parts[i].slice(1); // Capitalize subsequent words
  }
  return result;
}

//Using a for Loop without the Conditional Operator
function camelCase(cssProp) {
  const words = cssProp.split("-");
  let result = ""; // Initialize result as an empty string
  let isFirstWord = true;

  for (const word of words) {
    if (isFirstWord) {
      result += word; // Add the first word as is
      isFirstWord = false;
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of each subsequent word
    }
  }
  return result;
}

//5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:

//a) Explain why the above code returns the wrong answer
//We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:
//let fixedTwenty = twentyCents.toFixed(2); // fixedTwenty = "0.20" (string)
//let fixedTen = tenCents.toFixed(2); // fixedTen = "0.10" (string)
//console.log(fixedTwenty + fixedTen); //Output: "0.200.10" (string concatenation)
//result 0.200.10
//why is this not working?
//toFixed() converts the number into a string, not a number
//fixedTwenty + fixedTen, JS concatenates the strings instead of adding the numbers

// b.Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2) {
  return parseFloat((float1 + float2).toFixed(2));
}
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(currencyAddition(twentyCents, tenCents)); // Output: 0.3

//c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result.
function currencyOperation(float1, float2, operation) {
  let result = eval(`${float1} ${operation} ${float2}`);
  return parseFloat(result.toFixed(2));
}

console.log(currencyOperation(0.2, 0.1, "+")); // Output: 0.3
console.log(currencyOperation(0.2, 0.1, "-")); // Output: 0.1
console.log(currencyOperation(0.2, 0.1, "*")); // Output: 0.02
console.log(currencyOperation(0.2, 0.1, "/")); // Output: 2

//6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray.Test with the following arrays and create another one of your own.
function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

const randomNumbers = [7, 7, 42, 42, 99, 13, 13, 7, 99];

console.log(unique(colors)); // Output: [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // Output: [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(randomNumbers)); // Output: [ 7, 42, 99, 13 ]

// 7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

//map for Book Titles
const bookTitles = books.map((book) => book.title);
console.log(bookTitles);
// Output: [ 'The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Brave New World', 'The Catcher in the Rye' ]

//find for a Book by ID
const bookById = books.find((book) => book.id === 3);
console.log(bookById);
// Output: { id: 3, title: '1984', author: 'George Orwell', year: 1949 }

//filter for Books Published Before 1950
const oldBooks = books.filter((book) => book.year < 1950);
console.log(oldBooks);
// Output: [ { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }]

//a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
function getBookTitle(bookId) {
  return books.find((b) => b.id === bookId)?.title || null;
}
console.log(getBookTitle(3)); // Output: '1984'

//b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}
console.log(getOldBooks());

//c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
function addGenre(books) {
  return books.map((book) => ({ ...book, genre: "classic" }));
}
console.log(addGenre(books));

//d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
function getTitles(authorInitial) {
  return books
    .filter((book) => book.author.startsWith(authorInitial))
    .map((book) => book.title);
}
console.log(getTitles("F")); // Output: [ 'The Great Gatsby' ]

//8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

//c) Updated phone number for Caroline
phoneBookABC.set("Caroline", "0123456789"); // Updated number

console.log(phoneBookABC.get("Barry"));
console.log(phoneBookABC.get("Caroline"));

//a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map([
  // Initialized phoneBookDEF
  ["Dan", "0414112345"],
  ["Edgar", "0425223456"],
  ["Freddy", "0436334567"],
]);

console.log(phoneBookDEF.get("Edgar")); // Output: '0425223456'

//d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
function printPhoneBook(contacts) {
  contacts.forEach((phone, name) => console.log(`${name}: ${phone}`));
}

printPhoneBook(phoneBookABC);

//e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook.get("Caroline")); // Output: '0123456789'
console.log(phoneBook.get("Edgar")); // Output: '0425223456'

//f) Print out the full list of names in the combined phone book
phoneBook.forEach((_, name) => console.log(name));

//9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
//a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}
console.log(sumSalaries(salaries)); // Output: 233000

//b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
function topEarner(salaries) {
  return Object.entries(salaries).reduce(
    (top, [name, salary]) => (salary > top.salary ? { name, salary } : top),
    { name: "", salary: 0 }
  ).name;
}
console.log(topEarner(salaries)); // Output: 'Christina'

//10.The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

//a) Print the total number of minutes that have passed so far today
//b) Print the total number of seconds that have passed so far today
console.log(
  new Date().getHours() * 3600 +
    new Date().getMinutes() * 60 +
    new Date().getSeconds()
);

//c) Calculate and print your age as: 'I am x years, y months and z days old'
function calculateAge(birthDate) {
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      0
    );
    days += previousMonth.getDate();
  }

  console.log(`I am ${years} years, ${months} months, and ${days} days old`);
}

const birthDate = new Date(1993, 7, 24);
calculateAge(birthDate);

//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
const daysInBetween = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log(daysInBetween(new Date(2025, 12, 25), new Date(2026, 12, 25)));
