import pkg from 'chai'
import toInteger from '../src/toInteger.js'
var { assert, expect, should } = pkg;

describe('18. toInteger', function() {

  describe('18.1. A float (3.2)', function() {
    it('Should return 3', function() {
      assert.deepEqual(toInteger(3.2), 3);
    });
  });

  describe('18.2. A negative float (-3.9)', function() {
    it('Should return -3', function() {
      assert.deepEqual(toInteger(-3.9), -3);
    });
  });

  describe('18.3. Infinity', function() {
    it('Should return 1.7976931348623157e+308', function() {
      assert.deepEqual(toInteger(Infinity), 1.7976931348623157e+308);
    });
  });

  describe('18.4. Number.MIN_VALUE', function() {
    it('Should return 0', function() {
      assert.deepEqual(toInteger(Number.MIN_VALUE), 0);
    });
  });

  describe('18.5. A numeral string ("15.15")', function() {
    it('Should return 15', function() {
      assert.deepEqual(toInteger('15.15'), 15);
    });
  });

  describe('18.6. Math.PI', function() {
    it('Should return 3', function() {
      assert.deepEqual(toInteger(Math.PI), 3);
    });
  });

  describe('18.7. A non-numeral string ("test_string")', function() {
    it('Should return 0', function() {
      assert.deepEqual(toInteger('test_string'), 0);
    });
  });

  describe('18.8. Number.MAX_VALUE', function() {
    it('Should return 1.7976931348623157e+308', function() {
      assert.deepEqual(toInteger(Number.MAX_VALUE), 1.7976931348623157e+308);
    });
  });

  describe('18.9. Empty input', function() {
    it('Should not crash', function() {
      assert.deepEqual(toInteger(), 0);
    });
  });
});
