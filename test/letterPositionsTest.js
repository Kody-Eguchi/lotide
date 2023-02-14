const expect = require('chai').expect;
const letterPositions = require('../letterPositions');

describe('#letterPositions.js Test', () => {
  it('returns [1] (indexNumber) for e of "hello"', () => {
    expect(letterPositions("hello").e).to.have.members([1]);
  });

  it('returns [2, 3] (indexNumber) for e of "hello"', () => {
    expect(letterPositions("hello").l).to.have.members([2, 3]);
  });


  it('returns [0] (indexNumber) for e of "lighthouse in the house"', () => {
    expect(letterPositions("lighthouse in the house").l).to.have.members([0]);
  });


});
