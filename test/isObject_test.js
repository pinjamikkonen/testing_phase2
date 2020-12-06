import pkg from 'chai'
import isObject from '../src/isObject.js'
var { assert, expect, should } = pkg;

describe('31. isObject', function() {

  describe('31.1. Input is an empty object ({})', function() {
    it('Should return true', function() {
      assert.equal(isObject({}), true);
    });
  });

  describe('31.2. Input is an array ([1, 2, 3])', function() {
    it('Should return true', function() {
      assert.equal(isObject([1, 2, 3]), true);
    });
  });

  describe('31.3. Input is a function object (Function)', function() {
    it('Should return true', function() {
      assert.equal(isObject(Function), true);
    });
  });

  describe('31.4. Input is a number object (new Number(55))', function() {
    it('Should return true', function() {
      assert.equal(isObject(new Number(55)), true);
    });
  });

  describe('31.5. Input is a string object (new String("test_string"))', function() {
    it('Should return true', function() {
      assert.equal(isObject(new String('test_string')), true);
    });
  });

  describe('31.6. Input is a regular expression object (new RegExp("\\w+"))', function() {
    it('Should return true', function() {
      assert.equal(isObject(new RegExp('\\w+')), true);
    });
  });

  describe('31.7. Input is null (null)', function() {
    it('Should return false', function() {
      assert.equal(isObject(null), false);
    });
  });

  describe('31.8. Input is NaN (NaN)', function() {
    it('Should return false', function() {
      assert.equal(isObject(NaN), false);
    });
  });

  describe('31.9. Input is a string ("test_string")', function() {
    it('Should return false', function() {
      assert.equal(isObject('test_string'), false);
    });
  });

  describe('31.10. Input is boolean (true)', function() {
    it('Should return false', function() {
      assert.equal(isObject(true), false);
    });
  });

  describe('31.11. Input is a number (55)', function() {
    it('Should return false', function() {
      assert.equal(isObject(55), false);
    });
  });

  describe('31.12. Empty input', function() {
    it('Should return false', function() {
      assert.equal(isObject(), false);
    });
  });
});
