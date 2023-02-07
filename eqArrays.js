const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrOne, arrTwo) {
  let convertedArrOne = arrOne.toString();
  let convertedArrTwo = arrTwo.toString();
  console.log(arrOne, arrTwo);
  console.log(convertedArrOne, convertedArrTwo);
  return convertedArrOne === convertedArrTwo;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
