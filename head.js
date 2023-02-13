const head = function(arr) {
  const firstElement = arr[0];
  if (firstElement === undefined) {
    return "Only an array contains more than one element is accepted as argument";
  }

  return firstElement;
};

module.exports = head;


