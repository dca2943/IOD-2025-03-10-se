//Question 2
let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?
let addition = Number(three) + Number(four);
let multiplication = three * four; //12
let division = three / four; //0.75
let subtraction = three - four; //-1
let lessThan1 = three < four; //true
let lessThan2 = thirty < four; //true
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Subtraction:", subtraction);
console.log("LessThan1:", lessThan1);
console.log("LessThan2:", lessThan2);

//Which of the below are not giving the right answer?
//let addition = three + four; Result: "34" (string concatenation).
// Why are they not correct? The + operator performs string concatenation when one or both operands are strings. Instead of adding the numeric values 3 and 4, it concatenates the strings "3" and "4".
//How can we fix them? update from let addition = three + four; reult 34 to let addition = Number(three) + Number(four); result 7.
