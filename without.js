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

const without = function (source, itemsToRemove) {
  // let result = source.filter((e) => !itemsToRemove.includes(e));
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArrEq(words, ["hello", "world", "lighthouse"]);
