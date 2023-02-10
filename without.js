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

const assertArrEq = function(eqCheck) {
  if (!eqCheck) {
    console.log(`🛑🛑🛑Assertion Failed`);
    return;
  }
  console.log(`✅✅✅Assertion Passed`);
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArrEq(eqArrays(words, ["hello", "world", "lighthouse"]),["hello", "world"]);
