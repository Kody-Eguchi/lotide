const middle = function(arr) {
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

module.exports = middle;