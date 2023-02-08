const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  const results = {};
  const noSpaceStr = str.split(" ").join("");
  for (const letter of noSpaceStr) {
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["e"], 3);
