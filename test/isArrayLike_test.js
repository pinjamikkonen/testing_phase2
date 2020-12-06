import pkg from 'chai'
import isArrayLike from '../src/isArrayLike.js'
var { assert, expect, should } = pkg;


describe('10. isArrayLike', function() {
  describe('10.1. An array ([1, 2, 3])', function() {
    it('Should return true', function() {
      assert.equal(isArrayLike([1, 2, 3]), true);
    });
  });

  describe('10.2. A string ("abc")', function() {
    it('Should return true', function() {
      assert.equal(isArrayLike('abc'), true);
    });
  });

  describe('10.3. A Function', function() {
    it('Should return false', function() {
      assert.equal(isArrayLike(Function), false);
    });
  });

  describe('10.4. A null value', function() {
    it('Should return false', function() {
      assert.equal(isArrayLike(null), false);
    });
  });

  describe('10.5. Empty input', function() {
    it('Should return false', function() {
      assert.equal(isArrayLike(), false);
    });
  });
});
