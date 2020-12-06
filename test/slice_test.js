import pkg from 'chai'
import slice from '../src/slice.js'
var { assert, expect, should } = pkg;

describe('slice', function() {

  describe('x.1. [1, 2, 3, 4], 2', function() {
    it('Should return [3, 4]', function() {
      assert.deepEqual(slice([1, 2, 3, 4], 2), [3, 4]);
    });
  });

  describe('x.1. [a, b, 2, 3, 4], -1', function() {
    it('Should return [4]', function() {
      assert.deepEqual(slice(['a', 'b', 2, 3, 4], -1), [4]);
    });
  });

  describe('x.1. [1, 2], 30', function() {
    it('Should return []', function() {
      assert.deepEqual(slice([1, 2], 30), []);
    });
  });

  describe('x.1. 100, 30', function() {
    it('Should return []', function() {
      assert.deepEqual(slice(100, 30), []);
    });
  });

  describe('x.1. [1, 2, 3, 4], foo', function() {
    it('Should return [1, 2, 3, 4]', function() {
      assert.deepEqual(slice([1, 2, 3, 4], 'foo'), []);
    });
  });

  describe('x.1. [1, 2, 3, 4], undefined', function() {
    it('Should return [1, 2, 3, 4]', function() {
      assert.deepEqual(slice([1, 2, 3, 4], undefined), [1, 2, 3, 4]);
    });
  });

  describe('x.1. [null, null, null, test], undefined', function() {
    it('Should return [null, null, null, test]', function() {
      assert.deepEqual(slice([null, null, null, 'test'], undefined), [null, null, null, 'test']);
    });
  });

  describe('x.1. [test1, test2, [1, 2]], 2', function() {
    it('Should return [[1, 2]]', function() {
      assert.deepEqual(slice(['test1', 'test2', [1, 2]], 2), [[1, 2]]);
    });
  });
});
