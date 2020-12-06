import pkg from 'chai'
import isTypedArray from '../src/isTypedArray.js'
var { assert, expect, should } = pkg;

const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

describe('15. isTypedArray', function() {
  describe('15.1. Input is Int8Array (typedArray1)', function() {
    it('Should return true', function() {
      assert.equal(isTypedArray(typedArray1), true);
    });
  });

  describe('15.2. Input is Int8Array (typedArray2)', function() {
    it('Should return true', function() {
      assert.equal(isTypedArray(typedArray2), true);
    });
  });

  describe('15.3. Input is an empty array ([])', function() {
    it('Should return false', function() {
      assert.equal(isTypedArray([]), false);
    });
  });

  describe('15.4. Input is an array ([1, 2, 3])', function() {
    it('Should return false', function() {
      assert.equal(isTypedArray([1, 2, 3]), false);
    });
  });

  describe('15.5. Input is a string ("abc")', function() {
    it('Should return false', function() {
      assert.equal(isTypedArray('abc'), false);
    });
  });

  describe('15.6. Input is null', function() {
    it('Should return false', function() {
      assert.equal(isTypedArray(null), false);
    });
  });

});
