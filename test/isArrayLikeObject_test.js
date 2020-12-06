import pkg from 'chai'
import isArrayLikeObject from '../src/isArrayLikeObject.js'
var { assert, expect, should } = pkg;

describe('11. isArrayLikeObject', function() {
  describe('11.1. An array ([1, 2, 3])', function() {
    it('Should return true', function() {
      assert.equal(isArrayLikeObject([1, 2, 3]), true);
    });
  });

  describe('11.2. A string ("abc")', function() {
    it('Should return false', function() {
      assert.equal(isArrayLikeObject('abc'), false);
    });
  });

  describe('11.3. A Function', function() {
    it('Should return false', function() {
      assert.equal(isArrayLikeObject(Function), false);
    });
  });

  describe('11.4. A null value', function() {
    it('Should return false', function() {
      assert.equal(isArrayLikeObject(null), false);
    });
  });

  describe('11.5. Empty input', function() {
    it('Should return false', function() {
      assert.equal(isArrayLikeObject(), false);
    });
  });
});
