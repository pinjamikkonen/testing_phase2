import pkg from 'chai'
import isBoolean from '../src/isBoolean.js'
var { assert, expect, should } = pkg;

describe('12. isBoolean', function() {

  describe('12.1. A boolean value (false)', function() {
    it('Should return true', function() {
      assert.equal(isBoolean(false), true);
    });
  });

  describe('12.2. A boolean value (true)', function() {
    it('Should return true', function() {
      assert.equal(isBoolean(true), true);
    });
  });

  describe('12.3. A null value', function() {
    it('Should return false', function() {
      assert.equal(isBoolean(null), false);
    });
  });

  describe('12.4. Empty input', function() {
    it('Should return false', function() {
      assert.equal(isBoolean(), false);
    });
  });

  describe('12.5. A formula (1+2==3)', function() {
    it('Should return true', function() {
      assert.equal(isBoolean((1+2==3)), true);
    });
  });

  describe('12.6. A NaN value', function() {
    it('Should return false', function() {
      assert.equal(isBoolean(NaN), false);
    });
  });

  describe('12.7. An Object', function() {
    it('Should return false', function() {
      assert.equal(isBoolean(Object), false);
    });
  });
});
