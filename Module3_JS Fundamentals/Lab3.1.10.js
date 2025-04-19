//Person function is a constructor function in JavaScript, which is used to create objects with predefined properties and methods.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function canDrive() {
    return this.age >= 16; // Returns true if the person's age is 16 or older
  };
}

// a) Create a new person using the constructor function and store it in a variable
const person1 = new Person("Dayana", 31);
console.log(person1); // Output: { name: 'Dayana', age: 31, human: true }

//b) Create a second person using different name and age values and store it in a separate variable
const person2 = new Person("Nicholas", 14);
console.log(person2); // Output: { name: 'Nicholas', age: 14, human: true }

//c) Print out the properties of each person object to the console
//using for...in loop to iterate through the object's properties for both person1 and person2.
function printProperties(obj) {
  console.log("Properties of the object:");
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
// Print properties of person1
console.log("person1:");
printProperties(person1);

// Print properties of person2
console.log("\nperson2:");
printProperties(person2);

//d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.

// Rewrite the constructor function as a class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  //e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.
  canDrive() {
    return this.age >= 16; // Returns true if the person's age is 16 or older
  }
}

// Create a third person using the class
const person3 = new PersonClass("Nina", 15);
console.log(person3);

// Test the canDrive method
console.log(`${person1.name} can drive: ${person1.canDrive()}`); // Output: Dayana can drive: true
console.log(`${person2.name} can drive: ${person2.canDrive()}`); // Output: Nicholas can drive: false
console.log(`${person3.name} can drive: ${person3.canDrive()}`); // Output: Nina can drive: false
