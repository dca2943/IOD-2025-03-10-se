// Step 1: Create an array with 5 elements
//Below an aaray of counting by 10's
let myArray = [10, 20, 30, 40, 50];
console.log(myArray);

// Step 2: Replace the value of the element at position 1 and 4
//The value at index 1 is changes to 25.
//The value at index 4 is changes to 55.
myArray[1] = 25; // Replace element at index 1
myArray[4] = 55; // Replace element at index 4
console.log(myArray);

// Step 3: Add a new element to the beginning of the array
//the upshift () method adds the number 5 to the beginning of the array.
myArray.unshift(5); // Adds 5 at the beginning of th array
console.log(myArray);

// Step 4: Remove the element at the end of the array
//the pop() method removes the last element which is now 55 after the previous changes.
myArray.pop(); // Removes the last element
console.log(myArray);

// Step 5: Print the array to the console
//The array is printed to the console as follows [5, 10, 25, 30, 40 ]
console.log(myArray);
