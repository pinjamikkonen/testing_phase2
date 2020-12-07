import pkg from 'chai'
import toFinite from '../src/toFinite.js'
var { assert, expect, should } = pkg;

describe('43. toFinite', function() {
  describe('43.1. A finite number given as parameter (3.2)', function() {
    it('Should return 3.2', function() {
      assert.deepEqual(toFinite(3.2), 3.2);
    });
  });

  describe('43.2. A minimum value given as parameter (Number.MIN_VALUE)', function() {
    it('Should return 5e-324', function() {
      assert.deepEqual(toFinite(Number.MIN_VALUE), 5e-324);
    });
  });

  describe('43.3. Infinity given as parameter (Infinity)', function() {
    it('Should return 1.7976931348623157e+308', function() {
      assert.deepEqual(toFinite(Infinity), 1.7976931348623157e+308);
    });
  });

  describe('43.4. A string given as parameter ("3.4")', function() {
    it('Should return 3.4', function() {
      assert.deepEqual(toFinite('3.4'), 3.4);
    });
  });

  describe('43.5. Boolean given as parameter (false)', function() {
    it('Should return recover', function() {
      assert.deepEqual(toFinite(false), 0);
    });
  });

  describe('43.6. A string given as parameter ("test_string")', function() {
    it('Should return recover', function() {
      assert.deepEqual(toFinite('test_string'), 0);
    });
  });

  describe('43.7. Empty value given as parameter (null)', function() {
    it('Should return recover', function() {
      assert.deepEqual(toFinite(null), 0);
    });
  });

  describe('43.8. NaN given as parameter (NaN)', function() {
    it('Should return recover', function() {
      assert.deepEqual(toFinite(NaN), 0);
    });
  });
});
