import pkg from 'chai'
import slice from '../src/slice.js'
var { assert, expect, should } = pkg;

describe('19. slice', function() {

  describe('19.1. An array and a value ([1, 2, 3, 4], 2)', function() {
    it('Should return [3, 4]', function() {
      assert.deepEqual(slice([1, 2, 3, 4], 2), [3, 4]);
    });
  });

  describe('19.2. An array and negative integer ([a, b, 2, 3, 4], -1)', function() {
    it('Should return [4]', function() {
      assert.deepEqual(slice(['a', 'b', 2, 3, 4], -1), [4]);
    });
  });

  describe('19.3. An array and a large integer ([1, 2], 30)', function() {
    it('Should return []', function() {
      assert.deepEqual(slice([1, 2], 30), []);
    });
  });

  describe('19.4. Two integers (100, 30)', function() {
    it('Should return []', function() {
      assert.deepEqual(slice(100, 30), []);
    });
  });

  describe('19.5. An array and a string ([1, 2, 3, 4], "foo")', function() {
    it('Should return [1, 2, 3, 4]', function() {
      assert.deepEqual(slice([1, 2, 3, 4], 'foo'), []);
    });
  });

  describe('19.6. An array and undefined ([1, 2, 3, 4], undefined)', function() {
    it('Should return [1, 2, 3, 4]', function() {
      assert.deepEqual(slice([1, 2, 3, 4], undefined), [1, 2, 3, 4]);
    });
  });

  describe('19.7. Null array and undefined ([null, null, null, test], undefined)', function() {
    it('Should return [null, null, null, test]', function() {
      assert.deepEqual(slice([null, null, null, 'test'], undefined), [null, null, null, 'test']);
    });
  });

  describe('19.8. An array and an integer ([test1, test2, [1, 2]], 2)', function() {
    it('Should return [[1, 2]]', function() {
      assert.deepEqual(slice(['test1', 'test2', [1, 2]], 2), [[1, 2]]);
    });
  });
});
