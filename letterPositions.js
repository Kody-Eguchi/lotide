const letterPositions = function(sentence) {
  const results = {};
  //edge case: avoid adding the same index number of two same letters
  let position = 0;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [sentence.indexOf(letter)];
        //indexOF takes second argument (number) to decide where seaching start
        position = sentence.indexOf(letter);
      } else {
        //to exlude previous letter from the next indexOf search position (previous index num of same letter) +1
        results[letter].push(sentence.indexOf(letter, position + 1));
        position = sentence.indexOf(letter, position + 1);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
