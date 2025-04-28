//Question 3
//Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true"); //0 is a false value in JavaScript, will not print.
if ("0") console.log("#2 zero is true"); //"0" is a non-empty string, and all non-empty strings are truth in JavaScript, will print.
if (null) console.log("null is true"); //null is a false value in JavaScript, will not print.
if (-1) console.log("negative is true"); //-1 is a number, and all numbers except 0 are truth in JavaScript, will print.
if (1) console.log("positive is true"); //1 is a truth value in JavaScript, will print.
