let teamSports = ["Hockey", "Cricket", "Volleyball"]; //teamSports (Array)

//a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)

// Create a new variable `moreSports` equal to `teamSports`
let moreSports = [...teamSports];

// Add new sports using `push` and `unshift`
moreSports.push("Basketball"); // Adds to the end of the array
//Using push: Adds elements to the end of the array. In this example, 'Basketball' is added.
moreSports.unshift("Soccer"); // Adds to the beginning of the array
//Using unshift: Adds elements to the beginning of the array. In this example, 'Soccer' is added.

console.log("Original teamSports:", teamSports); // Check if the original array is unchanged
console.log("New moreSports:", moreSports); // Check the updated array

//b) Create a new dog2 variable equal to dog1 and give it a new value
let dog1 = "Bingo"; //dog1 (String)
let dog2 = dog1; // Create a new variable equal to dog1
dog2 = "Freddy"; // Assign a new value to dog2
console.log("dog1:", dog1); // Output: Bingo
console.log("dog2:", dog2); // Output: Freddy

//c) Create a new cat2 variable equal to cat1 and change its name property
let cat1 = { name: "Fluffy", breed: "Siberian" }; //cat1 (Object)
// Create a new cat2 variable equal to cat1
let cat2 = { ...cat1 }; // Create a new cat2 variable equal to cat1

// Change the name property of cat2
cat2.name = "lucky";

console.log("cat1:", cat1); // Output: { name: 'Fluffy', breed: 'Siberian' }
console.log("cat2:", cat2); // Output: { name: 'lucky', breed: 'Siberian' }

//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why? completed

//e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent, completed.
