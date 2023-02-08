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

const flatten = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArrEq(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
