import pkg from 'chai'
import isObject from '../src/isObject.js'
var { assert, expect, should } = pkg;

describe('isObject', function() {

  describe('x.1. {}', function() {
    it('Should return true', function() {
      assert.equal(isObject({}), true);
    });
  });

  describe('x.2. [1, 2, 3]', function() {
    it('Should return true', function() {
      assert.equal(isObject([1, 2, 3]), true);
    });
  });

  describe('x.3. Function', function() {
    it('Should return true', function() {
      assert.equal(isObject(Function), true);
    });
  });

  describe('x.4. new Number(55)', function() {
    it('Should return true', function() {
      assert.equal(isObject(new Number(55)), true);
    });
  });

  describe('x.5. new String(test_string)', function() {
    it('Should return true', function() {
      assert.equal(isObject(new String('test_string')), true);
    });
  });

  describe('x.6. new RegExp(\\w+)', function() {
    it('Should return true', function() {
      assert.equal(isObject(new RegExp('\\w+')), true);
    });
  });

  describe('x.7. null', function() {
    it('Should return false', function() {
      assert.equal(isObject(null), false);
    });
  });

  describe('x.8. NaN', function() {
    it('Should return false', function() {
      assert.equal(isObject(NaN), false);
    });
  });

  describe('x.9. test_string', function() {
    it('Should return false', function() {
      assert.equal(isObject('test_string'), false);
    });
  });

  describe('x.10. true', function() {
    it('Should return false', function() {
      assert.equal(isObject(true), false);
    });
  });

  describe('x.11. 55', function() {
    it('Should return false', function() {
      assert.equal(isObject(55), false);
    });
  });

  describe('x.12. Empty input', function() {
    it('Should return false', function() {
      assert.equal(isObject(), false);
    });
  });
});
