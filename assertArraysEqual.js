const assertArrEq = function(eqCheck) {
  if (!eqCheck) {
    console.log(`🛑🛑🛑Assertion Failed`);
  }
  console.log(`✅✅✅Assertion Passed`);
};

module.exports = assertArrEq;
