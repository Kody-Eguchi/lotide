const countLetters = function (str) {
  const results = {};
  const noSpaceStr = str.split(" ").join("");
  for (const letter of noSpaceStr) {
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }
  return results;
};

module.exports = countLetters;