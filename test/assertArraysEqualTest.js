const assertArrEq = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArrEq(eqArrays(["hello", "goodbye"], ["hello", "goodbye"]));
assertArrEq(eqArrays(["hello", "goodbye"], ["hola", "goodbye"]));
assertArrEq(eqArrays([3, 6, 9], [3, 6, 9]));
assertArrEq(eqArrays([3, 6, 9], [3, 7, 7]));
assertArrEq(eqArrays(["hello", 55], ["hello", 55]));
assertArrEq(eqArrays(["hello", 55], ["hello", 77]));