import pkg from 'chai'
import toString from '../src/toString.js'
import add from '../src/add.js'
var { assert, expect, should } = pkg;

describe('toString', function() {

  describe('x.1. 3.2 (number)', function() {
    it('Should return 3.2 (string)', function() {
      assert.equal(toString(3.2), '3.2');
    });
  });

  describe('x.1. null', function() {
    it('Should return empty string', function() {
      assert.equal(toString(null), '');
    });
  });

  describe('x.1. undefined', function() {
    it('Should return empty string', function() {
      assert.equal(toString(undefined), '');
    });
  });

  describe('x.1. NaN', function() {
    it('Should return NaN (string)', function() {
      assert.equal(toString(NaN), 'NaN');
    });
  });

  describe('x.1. [1, 2, 3, 4]', function() {
    it('Should return 1,2,3,4', function() {
      assert.equal(toString([1, 2, 3, 4]), '1,2,3,4');
    });
  });

  describe('x.1. {keys: lost}', function() {
    it('Should not crash', function() {
      assert.equal(toString({'keys': 'lost'}), '');
    });
  });

  describe('x.1. Empty input', function() {
    it('Should return empty string', function() {
      assert.equal(toString(), '');
    });
  });

  describe('x.1. -0 (Number)', function() {
    it('Should return -0 (string)', function() {
      assert.equal(toString(-0), '-0');
    });
  });

  describe('x.1. Infinity (Number)', function() {
    it('Should return Infinity (string)', function() {
      assert.equal(toString(Infinity), 'Infinity');
    });
  });
});
