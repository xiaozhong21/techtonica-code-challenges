// No. 1
// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.
function divisibleByThree(num) {
  if (typeof num === "number") {
    return num % 3 === 0;
  } else {
    return "Please enter a valid number as input"
  }
}

// Testing
console.log("divisibleByThree(6) => Expected: true; Got: " + divisibleByThree(6));
console.log("divisibleByThree('6') => Expected: 'Please enter a valid number as input'; Got: " + divisibleByThree('6'));
console.log("divisibleByThree(100) => Expected: false; Got: " + divisibleByThree(100));
console.log("divisibleByThree(4587) => Expected: true; Got: " + divisibleByThree(4587));

//////////////////////////////////////////////////////////////
// No. 2
// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.
function numOfCharacters(str) {
  return str.length;
}

// Testing
console.log("numOfCharacters('apple') => Expected: 5; Got: " + numOfCharacters("apple"));
console.log("numOfCharacters('apple pie') => Expected: 9; Got: " + numOfCharacters("apple pie"));
console.log("numOfCharacters('SPACE9') => Expected: 6; Got: " + numOfCharacters("SPACE9"));
console.log("numOfCharacters('I love_SpacE!') => Expected: 13; Got: " + numOfCharacters("I love_SpacE!"));

//////////////////////////////////////////////////////////////
// No. 3
// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")
let array = [3, 7, 16];
array[0];
array[array.length - 1];
array.push(20);
array.unshift([0, 1, 2]);
array[0][0];


//////////////////////////////////////////////////////////////
// No. 4
// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.
function calculateMinutesElapsed() {
  let currentTime = new Date();
  let midnightTime = new Date("2021/07/29 00:00");
  let differenceInMinutes = (currentTime - midnightTime) / (1000 * 60);
  return differenceInMinutes;
}

console.log(calculateMinutesElapsed());
