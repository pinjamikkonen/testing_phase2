import pkg from 'chai'
import toNumber from '../src/toNumber.js'
var { assert, expect, should } = pkg;

describe('toNumber', function() {

  describe('x.1. 3.2', function() {
    it('Should return 3.2', function() {
      assert.deepEqual(toNumber(3.2), 3.2);
    });
  });

  describe('x.1. 3.2 (string)', function() {
    it('Should return 3.2', function() {
      assert.deepEqual(toNumber('3.2'), 3.2);
    });
  });

  describe('x.1. Number.MIN_VALUE', function() {
    it('Should return 5e-324', function() {
      assert.deepEqual(toNumber(Number.MIN_VALUE), 5e-324);
    });
  });

  describe('x.1. Infinity', function() {
    it('Should return Infinity', function() {
      assert.deepEqual(toNumber(Infinity), Infinity);
    });
  });

  describe('x.1. Binary 0b01100001', function() {
    it('Should return 97', function() {
      assert.deepEqual(toNumber('0b01100001'), 97);
    });
  });

  describe('x.1. Octal 0o112', function() {
    it('Should return 74', function() {
      assert.deepEqual(toNumber('0o112'), 74);
    });
  });


  describe('x.1. Hexadecimal 0xC', function() {
    it('Should return 12', function() {
      assert.deepEqual(toNumber('0xC'), 12);
    });
  });

  describe('x.1. Hexadecimal & trailing spaces      0xC      ', function() {
    it('Should return 12', function() {
      assert.deepEqual(toNumber('    0xC    '), 12);
    });
  });

  describe('x.1. test_string', function() {
    it('Should return NaN', function() {
      assert.deepEqual(toNumber('test_string'), NaN);
    });
  });

  describe('x.1. 12, 33, 44', function() {
    it('Should return NaN', function() {
      assert.deepEqual(toNumber(12 + 33 + 44), 89);
    });
  });

  describe('x.1. [1, 2]', function() {
    it('Should return NaN', function() {
      assert.deepEqual(toNumber([1, 2]), NaN);
    });
  });

  describe('x.1. Boolean', function() {
    it('Should return NaN', function() {
      assert.deepEqual(toNumber(Boolean), NaN);
    });
  });
});
