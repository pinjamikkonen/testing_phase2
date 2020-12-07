import pkg from 'chai'
import toString from '../src/toString.js'
import add from '../src/add.js'
var { assert, expect, should } = pkg;

describe('21. toString', function() {

  describe('21.1. A number (3.2)', function() {
    it('Should return a string "3.2"', function() {
      assert.equal(toString(3.2), '3.2');
    });
  });

  describe('21.2. null', function() {
    it('Should return empty string', function() {
      assert.equal(toString(null), '');
    });
  });

  describe('21.3. undefined', function() {
    it('Should return empty string', function() {
      assert.equal(toString(undefined), '');
    });
  });

  describe('21.4. NaN', function() {
    it('Should return a string "NaN"', function() {
      assert.equal(toString(NaN), 'NaN');
    });
  });

  describe('21.5. An array of integers ([1, 2, 3, 4])', function() {
    it('Should return "1,2,3,4"', function() {
      assert.equal(toString([1, 2, 3, 4]), '1,2,3,4');
    });
  });

  describe('21.6. Empty input', function() {
    it('Should return empty string', function() {
      assert.equal(toString(), '');
    });
  });

  describe('21.7. -0 (Number)', function() {
    it('Should return -0 (string)', function() {
      assert.equal(toString(-0), '-0');
    });
  });

  describe('21.8. Infinity (Number)', function() {
    it('Should return Infinity (string)', function() {
      assert.equal(toString(Infinity), 'Infinity');
    });
  });
});
