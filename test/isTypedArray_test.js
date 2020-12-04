/*import pkg from 'chai'
import isTypedArray from '../src/isTypedArray.js'
var { assert, expect, should } = pkg;

const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

describe('isTypedArray', function() {
  describe('typedArray1', function() {
    it('Should return true', function() {
      assert.equal(isTypedArray(typedArray1), true);
    });
  });

  describe('typedArray2', function() {
    it('Should return true', function() {
      assert.equal(isTypedArray(typedArray2), true);
    });
  });

  describe('emptyArray', function() {
    it('Should return false', function() {
      assert.equal(isTypedArray([]), false);
    });
  });

  describe('Normal array', function() {
    it('Should return false', function() {
      assert.equal(isTypedArray([1, 2, 3]), false);
    });
  });

  describe('a string', function() {
    it('Should return false', function() {
      assert.equal(isTypedArray('abc'), false);
    });
  });

  describe('null', function() {
    it('Should return false', function() {
      assert.equal(isTypedArray(null), false);
    });
  });

});
*/
