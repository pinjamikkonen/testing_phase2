import pkg from 'chai'
import isArrayLikeObject from '../src/isArrayLikeObject.js'
var { assert, expect, should } = pkg;

// importtaa tänne joku document testifilu

describe('isArrayLikeObject', function() {
  describe('[1, 2, 3]', function() {
    it('Should return true', function() {
      assert.equal(isArrayLikeObject([1, 2, 3]), true);
    });
  });

  describe('abc', function() {
    it('Should return false', function() {
      assert.equal(isArrayLikeObject('abc'), false);
    });
  });

  describe('Function', function() {
    it('Should return false', function() {
      assert.equal(isArrayLikeObject(Function), false);
    });
  });

  describe('null', function() {
    it('Should return false', function() {
      assert.equal(isArrayLikeObject(null), false);
    });
  });

  describe('Empty input', function() {
    it('Should return false', function() {
      assert.equal(isArrayLikeObject(), false);
    });
  });
});
