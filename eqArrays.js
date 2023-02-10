const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
};

// const eqArrays = function(arrOne, arrTwo) {
//   let convertedArrOne = arrOne.toString();
//   let convertedArrTwo = arrTwo.toString();
//   return convertedArrOne === convertedArrTwo;
// };


const eqArrays = function(arrOne, arrTwo) {

  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 3, 3], [1, 4, 3]), false);