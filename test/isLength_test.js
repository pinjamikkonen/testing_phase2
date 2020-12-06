import pkg from 'chai'
import isLength from '../src/isLength.js'
var { assert, expect, should } = pkg;

describe('14. isLength', function() {
  describe('14.1. Test value is an array-like length (2)', function() {
    it('Should return true', function() {
      assert.deepEqual(isLength(2), true);
    });
  });

  describe('14.2. Test null as an array-like length (null)', function() {
    it('Should return false', function() {
      assert.deepEqual(isLength(null), false);
    });
  });

  describe('14.3. Test a string as an array-like length ("2")', function() {
    it('Should return false', function() {
      assert.deepEqual(isLength("2"), false);
    });
  });

  describe('14.4. Test Infinity as an array-like length (Infinity)', function() {
    it('Should return false', function() {
      assert.deepEqual(isLength(Infinity), false);
    });
  });

  describe('14.5. Test without parameters', function() {
    it('Should return false', function() {
      assert.deepEqual(isLength(), false);
    });
  });
});
