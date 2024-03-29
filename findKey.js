const findKey = function(obj, callback) {
  const keys = Object.keys(obj);

  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;