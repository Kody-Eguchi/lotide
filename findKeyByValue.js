const findKeyByValue = function(obj, title) {
  for (const genre in obj) {
    if (obj[genre] === title) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;