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

const middle = function (arr) {
  //edge case: no middle - only one or two element
  //odd number: return middle number
  //even number: return two numbers
  //identify middleIndex(s)

  const middleIndex = Math.floor(arr.length / 2);

  let middleNum = [];
  if (arr.length <= 2) {
    middleNum = [];
  } else if (arr.length % 2 === 0) {
    middleNum.push(arr[middleIndex - 1], arr[middleIndex]);
  } else {
    middleNum.push(arr[middleIndex]);
  }
  return middleNum;
};

console.log(middle([1]));
assertArrEq(eqArrays(middle([1]), []), true);
console.log(middle([1, 2]));
assertArrEq(eqArrays(middle([1, 2]), []), true);
console.log(middle([1, 2, 3]));
assertArrEq(eqArrays(middle([1, 2, 3]), [2]), true);
console.log(middle([1, 2, 3, 4, 5]));
assertArrEq(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
console.log(middle([1, 2, 3, 4]));
assertArrEq(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
console.log(middle([1, 2, 3, 4, 5, 6]));
assertArrEq(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
