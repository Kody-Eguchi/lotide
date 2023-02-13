const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //returning false if object1 has more properties than object2
  if (keys1.length !== keys2.length) {
    return false;
  }
  // returning false if keys1's value does not match keys2's value
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      eqArrays(val1, val2);
    } else {
      if (val1 !== val2) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;