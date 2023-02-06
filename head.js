const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (arr) {
  const firstElement = arr[0];

  if (firstElement === undefined || arr.length === 1) {
    return "Only an array contains more than one element is accepted as argument";
  } else {
    return firstElement;
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
