import pkg from 'chai'
import toNumber from '../src/toNumber.js'
var { assert, expect, should } = pkg;

describe('20. toNumber', function() {

  describe('20.1. A float (3.2)', function() {
    it('Should return 3.2', function() {
      assert.deepEqual(toNumber(3.2), 3.2);
    });
  });

  describe('20.2. A string ("3.2")', function() {
    it('Should return 3.2', function() {
      assert.deepEqual(toNumber('3.2'), 3.2);
    });
  });

  describe('20.3. Number.MIN_VALUE', function() {
    it('Should return 5e-324', function() {
      assert.deepEqual(toNumber(Number.MIN_VALUE), 5e-324);
    });
  });

  describe('20.4. Infinity', function() {
    it('Should return Infinity', function() {
      assert.deepEqual(toNumber(Infinity), Infinity);
    });
  });

  describe('20.5. Binary 0b01100001', function() {
    it('Should return 97', function() {
      assert.deepEqual(toNumber('0b01100001'), 97);
    });
  });

  describe('20.6. Octal 0o112', function() {
    it('Should return 74', function() {
      assert.deepEqual(toNumber('0o112'), 74);
    });
  });

  describe('20.7. Hexadecimal 0xC', function() {
    it('Should return 12', function() {
      assert.deepEqual(toNumber('0xC'), 12);
    });
  });

  describe('20.8. Hexadecimal & trailing spaces ("     0xC      ")', function() {
    it('Should return 12', function() {
      assert.deepEqual(toNumber('    0xC    '), 12);
    });
  });

  describe('20.9. A string ("test_string")', function() {
    it('Should return NaN', function() {
      assert.deepEqual(toNumber('test_string'), NaN);
    });
  });

  describe('20.10. A sum (12 + 33 + 44)', function() {
    it('Should return 89', function() {
      assert.deepEqual(toNumber(12 + 33 + 44), 89);
    });
  });

  describe('20.11. An array ([1, 2])', function() {
    it('Should return NaN', function() {
      assert.deepEqual(toNumber([1, 2]), NaN);
    });
  });

  describe('20.12. Boolean', function() {
    it('Should return NaN', function() {
      assert.deepEqual(toNumber(Boolean), NaN);
    });
  });
});
