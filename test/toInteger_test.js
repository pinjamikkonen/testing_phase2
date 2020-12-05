import pkg from 'chai'
import toInteger from '../src/toInteger.js'
var { assert, expect, should } = pkg;

describe('toInteger', function() {

  describe('x.1. 3.2', function() {
    it('Should return 3', function() {
      assert.deepEqual(toInteger(3.2), 3);
    });
  });

  describe('x.1. -3.9', function() {
    it('Should return -3', function() {
      assert.deepEqual(toInteger(-3.9), -3);
    });
  });

  describe('x.1. Infinity', function() {
    it('Should return big number', function() {
      assert.deepEqual(toInteger(Infinity), 1.7976931348623157e+308);
    });
  });

  describe('x.1. Number.MIN_VALUE', function() {
    it('Should return 0', function() {
      assert.deepEqual(toInteger(Number.MIN_VALUE), 0);
    });
  });

  describe('x.1. 15.15', function() {
    it('Should return 15', function() {
      assert.deepEqual(toInteger('15.15'), 15);
    });
  });

  describe('x.1. PI', function() {
    it('Should return 3', function() {
      assert.deepEqual(toInteger(Math.PI), 3);
    });
  });

  describe('x.1. test_string', function() {
    it('Should return 0', function() {
      assert.deepEqual(toInteger('test_string'), 0);
    });
  });

  describe('x.1. Number.MAX_VALUE', function() {
    it('Should return big number', function() {
      assert.deepEqual(toInteger(Number.MAX_VALUE), 1.7976931348623157e+308);
    });
  });

  describe('x.1. Empty input', function() {
    it('Should not crash', function() {
      assert.deepEqual(toInteger(), 0);
    });
  });
});
