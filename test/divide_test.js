import pkg from 'chai'
import divide from '../src/divide.js'
var { assert, expect, should } = pkg;

describe('7. divide', function() {
  describe('7.1. Divide two numbers', function() {
    it('Should return 5', function() {
      assert.equal(divide(25, 5), 5);
    });
  });

  describe('7.2. Divide with negative decimal and a char value', function() {
    it('Should return -0.5', function() {
      assert.equal(divide(-3, '6'), -0.5);
    });
  });

  describe('7.3. Divide a string', function() {
    it('Should not crash', function() {
      assert.deepEqual(divide('s', 12), NaN);
    });
  });

  describe('7.4. Divide with zero', function() {
    it('Should not crash', function() {
      assert.deepEqual(divide(25, 0), NaN);
    });
  });
});
