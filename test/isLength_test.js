import pkg from 'chai'
import isLength from '../src/isLength.js'
var { assert, expect, should } = pkg;

describe('isLength', function() {
  describe('Check if value is array-like length', function() {
    it('Should return true', function() {
      assert.deepEqual(isLength(2), true);
    });
  });

  describe('Test null as an array-like length', function() {
    it('Should return false', function() {
      assert.deepEqual(isLength(null), false);
    });
  });

  describe('Test a string as an array-like length', function() {
    it('Should return false', function() {
      assert.deepEqual(isLength("2"), true);
    });
  });

  describe('Test an infinity as an array-like length', function() {
    it('Should return false', function() {
      assert.deepEqual(isLength(Infinity), true);
    });
  });

  describe('Test without parameters', function() {
    it('Should return false', function() {
      assert.deepEqual(isLength(), false);
    });
  });
});
