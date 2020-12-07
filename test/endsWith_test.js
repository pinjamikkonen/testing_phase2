import pkg from 'chai'
import endsWith from '../src/endsWith.js'
var { assert, expect, should } = pkg;

describe('40. endsWith', function() {
  describe('40.1. A string and correct letter given as parameter ("abc", "c")', function() {
    it('Should return true', function() {
      assert.deepEqual(endsWith('abc', 'c'), true);
    });
  });

  describe('40.2. A string and incorrect letter given as parameter ("abc", "b")', function() {
    it('Should return false', function() {
      assert.deepEqual(endsWith('abc', 'b'), false);
    });
  });

  describe('40.3. A string and correct letter and index given as parameter ("abc", "b", 2)', function() {
    it('Should return true', function() {
      assert.deepEqual(endsWith('abc', 'b', 2), true);
    });
  });

  describe('40.4. A string and negative index given as parameter ("abc", "a", -1)', function() {
    it('Should return true', function() {
      assert.deepEqual(endsWith('abc', 'a', -1), false);
    });
  });

  describe('40.5. A string and too large index given as parameter ("abc", "a", 50)', function() {
    it('Should return false', function() {
      assert.deepEqual(endsWith('abc', 'a', 50), false);
    });
  });

  describe('40.6. A null value given as parameter (null, "a", 50)', function() {
    it('Should recover', function() {
      assert.deepEqual(endsWith(null, 'a', 50), false);
    });
  });

  describe('40.7. A empty string given as parameter ("", "a", 50)', function() {
    it('Should recover', function() {
      assert.deepEqual(endsWith('', 'a', 50), false);
    });
  });
});
