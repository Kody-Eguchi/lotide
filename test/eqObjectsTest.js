const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('#eqObjects.js Test', () => {
  it('returns true for { color: "red", size: "medium" }, { size: "medium", color: "red" }', () => {
    const object1 = { color: "red", size: "medium" };
    const object2 = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("returns false for { color: 'red', size: 'medium' }, { size: 'medium', color: 'red', sleeveLength: 'long'}", () => {
    const object1 = { color: "red", size: "medium" };
    const object2 = {
      size: "medium",
      color: "red",
      sleeveLength: "long",
    };
    assert.isFalse(eqObjects(object1, object2));
  });

  it('returns true for { colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"]}', () => {
    const object1 = { colors: ["red", "blue"], size: "medium" };
    const object2 = { size: "medium", colors: ["red", "blue"]};
    assert.isTrue(eqObjects(object1, object2));
  });

});
