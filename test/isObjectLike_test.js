import pkg from 'chai'
import isObjectLike from '../src/isObjectLike.js'
var { assert, expect, should } = pkg;

describe('32. isObjectLike', function() {

  describe('32.1. Input is an empty object ({})', function() {
    it('Should return true', function() {
      assert.equal(isObjectLike({}), true);
    });
  });

  describe('32.2. Input is an array ([1, 2, 3])', function() {
    it('Should return true', function() {
      assert.equal(isObjectLike([1, 2, 3]), true);
    });
  });

  describe('32.3. Input is a function object (Function)', function() {
    it('Should return false', function() {
      assert.equal(isObjectLike(Function), false);
    });
  });

  describe('32.4. Input is a number object (new Number(55))', function() {
    it('Should return true', function() {
      assert.equal(isObjectLike(new Number(55)), true);
    });
  });

  describe('32.5. Input is a string object (new String("test_string"))', function() {
    it('Should return true', function() {
      assert.equal(isObjectLike(new String('test_string')), true);
    });
  });

  describe('32.6. Input is a regular expression object (new RegExp("\\w+"))', function() {
    it('Should return true', function() {
      assert.equal(isObjectLike(new RegExp('\\w+')), true);
    });
  });

  describe('32.7. Input is null (null)', function() {
    it('Should return false', function() {
      assert.equal(isObjectLike(null), false);
    });
  });

  describe('32.8. Input is NaN (NaN)', function() {
    it('Should return false', function() {
      assert.equal(isObjectLike(NaN), false);
    });
  });

  describe('32.9. Input is a string ("test_string")', function() {
    it('Should return false', function() {
      assert.equal(isObjectLike('test_string'), false);
    });
  });

  describe('32.10. Input is boolean (true)', function() {
    it('Should return false', function() {
      assert.equal(isObjectLike(true), false);
    });
  });

  describe('32.11. Input is a number (55)', function() {
    it('Should return false', function() {
      assert.equal(isObjectLike(55), false);
    });
  });

  describe('32.12. Empty input', function() {
    it('Should return false', function() {
      assert.equal(isObjectLike(), false);
    });
  });
});
