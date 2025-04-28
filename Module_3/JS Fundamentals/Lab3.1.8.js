const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

//a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.

for (let x in sydney) {
  console.log(`${x}: ${sydney[x]}`);
}

//b) Create a new object for a different city with different properties and call your function again with the new object.

const tokyo = {
  name: "Tokyo",
  population: 37_400_000,
  country: "Japan",
  founded: "1603",
  timezone: "Asia/Tokyo",
};

for (let x in tokyo) {
  console.log(`${x}: ${tokyo[x]}`);
}
