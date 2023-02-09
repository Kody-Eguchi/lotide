const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

const eqArrays = function (arrOne, arrTwo) {
  let convertedArrOne = arrOne.toString();
  let convertedArrTwo = arrTwo.toString();

  return convertedArrOne === convertedArrTwo;
};

const assertArrEq = function (eqCheck) {
  if (eqCheck) {
    console.log(`✅✅✅Assertion Passed`);
  } else if (!eqCheck) {
    console.log(`🛑🛑🛑Assertion Failed`);
  }
};

assertArrEq(
  eqArrays(
    map(words, (word) => word[0]),
    ["g", "c", "t", "m", "t"]
  )
);
