// [Challenge 1] - Convert Inches to Meters ==> Constant runtime O(1)
// Define a function called metersToInches that takes an input of the number of meters 
//and outputs the result of the number of inches.
// Hint: 1 meter equals 39.3701 inches.
function metersToInches(meters) {
  return meters * 39.3701;
}

//Testing
console.log("metersToInches(0) => Expected: 0; Got: " + metersToInches(0));
console.log("metersToInches(1) => Expected: 39.3701; Got: " + metersToInches(1));
console.log("metersToInches(1.5) => Expected: 59.05515; Got: " + metersToInches(1.5));
console.log("metersToInches(15.6) => Expected: 614.17356; Got: " + metersToInches(15.6));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 2] - Loop n Times ==> Linear runtime: O(n)
// Write a function named loopThrough that takes an argument that is a number and loops 
//through and displays a message “Hello World” that number of times.
function loopThrough(num) {
  for (let i = 0; i < num; i++) {
    console.log("Hello World");
  }
}
// Testing
loopThrough(0); // Expect nothing to be displayed
loopThrough(1); // Expect message displayed 1 time
loopThrough(3); // Expected message displayed 3 times

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 3] - Number sum ==> Linear runtime: O(n)
// Define a function called calculateSum to calculate the sum of all the digits from 0 to an input number.
function calculateSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
//Testing
console.log("calculateSum(0) => Expected: 0; Got: " + calculateSum(0));
console.log("calculateSum(1) => Expected: 1; Got: " + calculateSum(1));
console.log("calculateSum(3) => Expected: 6; Got: " + calculateSum(3));
console.log("calculateSum(10) => Expected: 55; Got: " + calculateSum(10));


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 4] - FizzBuzz ==> Linear runtime: O(n)
// Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
//Testing
fizzbuzz(0); // Expect no output
fizzbuzz(16); 

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 5] Calculate Factorial Number ==> Linear runtime: O(n)
// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.
// For example, the value of 3 factorial, is 6, which can be calculated by:
// 3 * 2 * 1
// The value of 10 factorial, for example, can be calculated by:
// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
function calculateFactorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}
//Testing
console.log("calculateFactorial(3) => Expected: 6; Got: " + calculateFactorial(3));
console.log("calculateFactorial(10) => Expected: 3628800; Got: " + calculateFactorial(10));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 6] Switch Statements ==> Constant runtime: O(1)?
// Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: 
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on 
 //vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
// Results:
// sleep_in(false, false) → true
// sleep_in(true, false) → false
// sleep_in(false, true) → true
function sleepIn(weekday, vacation) {
  if (!weekday || vacation) {
    return true;
  }
  return false;
}
//Testing
console.log("sleepIn(false, false) => Expected: true; Got: " + sleepIn(false, false));
console.log("sleepIn(true, false) => Expected: false; Got: " + sleepIn(true, false));
console.log("sleepIn(false, true) => Expected: true; Got: " + sleepIn(false, true));


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 7] Accessing Arrays ==> Constant runtime: O(1)
// Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, 
// return True if they have the same first element or they have the same last element. 
//Both arrays will be length 1 or more.
// Results
// common([1, 2, 3], [7, 3]) → True
// common([1, 2, 3], [7, 3, 2]) → False
// common([1, 2, 3], [1, 2]) → True
function common(a, b) {
  if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true;
  }
  return false;
}
// Testing
console.log("common([1, 2, 3], [7, 3]) => Expected: true; Got: " + common([1, 2, 3], [7, 3]));
console.log("common([1, 2, 3], [7, 3, 2]) => Expected: false; Got: " + common([1, 2, 3], [7, 3, 2]));
console.log("common([1, 2, 3], [1, 2]) => Expected: true; Got: " + common([1, 2, 3], [1, 2]));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 8] Object Keys and Values ==> Constant runtime: O(1)
// 1. Create an object with two key-value pairs.
let shoppingList = {
  milk: 2,
  apple: 5
}
// 2. Log that object to the console.
console.log(shoppingList);
// 3. Delete the first key-value pair in the object.
delete shoppingList["milk"];
// 4. Log that object to the console again. The first key-value pair should be gone.
console.log(shoppingList);

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 9] Mutating Objects ==> Linear runtime: O(n)
// 1. Create an array of objects with at least 2 key value pairs. The objects should all have the 
// same keys, and the array should contain at least 3 objects.
let carModels = [
  {
    brand: "Ford",
    year: 2000
  },
  {
    brand: "Honda",
    year: 2005
  },
  {
    brand: "Toyota",
    year: 2021
  }
];
// 2. Create a function that accepts the array of objects as an argument.
// 3. Print the value of the second key in each object to the console. Use dot-notation to access 
// the values.
// 4. After printing the values in step 3, change the values of the second key in every object to 
// something new.
// 5. Prove the change worked by printing the second key in each object to the console, which should 
// show the new value. Use bracket-notation to access the values this time.
function printValues(arr) {
  for (let obj of arr) {
    console.log(obj.year); // Expected return of 2000, 2005, 2021 respectively
    obj.year = obj.year + 1;
    console.log(obj.year) // Expected return of 2001, 2006, 2022 respectively
  }
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// [Challenge 10] Determine Runtime Complexity
// At the top your document for each challenge, state the runtime complexity for that function.