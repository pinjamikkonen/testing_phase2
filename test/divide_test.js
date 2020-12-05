import pkg from 'chai'
import divide from '../src/divide.js'
var { assert, expect, should } = pkg;

// HOX kaikki testit failaa niin jätän näin :)

describe('divide', function() {
  describe('Divide two numbers', function() {
    it('Should return 5', function() {
      assert.equal(divide(25, 5), 5);
    });
  });

  describe('Divide with negative decimal and a char value', function() {
    it('Should return -0.5', function() {
      assert.equal(divide(-3, '6'), -0.5);
    });
  });

  // These should be changed so that its not assert.equal but assert.notCrash or something
  describe('Divide a string', function() {
    it('Should not crash', function() {
      assert.equal(divide('s', 12), 0);
    });
  });

  describe('Divide with zero', function() {
    it('Should not crash', function() {
      assert.equal(divide(25, 0), 0);
    });
  });
});
