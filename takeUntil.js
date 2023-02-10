const takeUntil = function(arr, callback) {
  const result = [];
  for (const item of arr) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

const eqArrays = function(arrOne, arrTwo) {
  let convertedArrOne = arrOne.toString();
  let convertedArrTwo = arrTwo.toString();

  return convertedArrOne === convertedArrTwo;
};

const assertArrEq = function(eqCheck) {
  if (eqCheck) {
    console.log(`✅✅✅Assertion Passed`);
  } else if (!eqCheck) {
    console.log(`🛑🛑🛑Assertion Failed`);
  }
};

assertArrEq(
  eqArrays(
    takeUntil(data1, (x) => x < 0),
    [1, 2, 5, 7, 2]
  )
);
assertArrEq(
  eqArrays(
    takeUntil(data2, (x) => x === ","),
    ["I've", "been", "to", "Hollywood"]
  )
);
