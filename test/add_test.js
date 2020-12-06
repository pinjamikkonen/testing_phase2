import pkg from 'chai'
import add from '../src/add.js'
var { assert, expect, should } = pkg;

describe('1. add', function() {
  describe('1.1. Two positive integers (6, 4)', function() {
    it('Should return the sum of integers (10)', function() {
      assert.equal(add(6, 4), 10);
    });
  });

  describe('1.2. Two negative integers (-6, -4)', function() {
    it('Should return the sum of integers (-10)', function() {
      assert.equal(add(-6, -4), -10);
    });
  });

  describe('1.3. Only one parameter (6)', function() {
    it('Should return integer + 0 (6)', function() {
      assert.equal(add(6,), 6);
    });
  });

  describe('1.4. Wrong parameter: one string (6, 4)', function() {
    it('Should convert the string to numeral and return the sum (10)', function() {
      assert.equal(add(6, '4'), 10);
    });
  });

  describe('1.5. Wrong parameter: two strings (6, 4)', function() {
    it('Should convert strings to numbers and return the sum (10)', function() {
      assert.equal(add('6', '4'), 10);
    });
  });

  describe('1.6. Wrong parameter: NaN', function() {
    it('Should return integer + 0 (6)', function() {
      assert.equal(add(6, NaN), 6);
    });
  });

  describe('1.7. Wrong parameter: undefined', function() {
    it('Should return integer + 0', function() {
      assert.equal(add(6, undefined), 6);
    });
  });
});
