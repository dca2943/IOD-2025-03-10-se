// Create a book object
let book = {
  title: "The Basics of JSON",
  description: "A book about JSON",
  author: "Dayana Rosales",
  pages: 8888,
};
// Printing individual properties
console.log(book.title); // "The Basics of JSON"
console.log(book.description); // "A book about JSON"
console.log(book.author); // "Dayana Rosales"
console.log(book.pages); // 8888

// Print the whole book object
console.log(book);

// Update the description of the book
book.description =
  "An in-depth book that contains steps, strategies, and techniques you need to learn, explore, and use JSON.";
console.log(book.description); // Updated description
