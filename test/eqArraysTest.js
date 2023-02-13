const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe('#eqArrays.js Test', () => {
  it('returns true for [1, 2, 3], [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('returns flase for [1, 3, 3], [1, 4, 3]', () => {
    assert.isFalse(eqArrays([1, 3, 3], [1, 4, 3]));
  });

});