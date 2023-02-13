const head = function(arr) {
  const firstElement = arr[0];
  if (firstElement === undefined || arr.length === 1) {
    return "Only an array contains more than one element is accepted as argument";
  } else {
    return firstElement;
  }
};

module.exports = head;


