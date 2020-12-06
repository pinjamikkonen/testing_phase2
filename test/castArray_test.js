import pkg from 'chai'
import castArray from '../src/castArray.js'
var { assert } = pkg;

var arr = [['a', 'b']]

describe('24. castArray', function() {
  describe('24.1. Test with an integer (1)', function() {
    it('Should return [1]', function() {
      assert.deepEqual(castArray(1), [1]);
    });
  });

  describe('24.2. Test with no parameters ()', function() {
    it('Should return an empty array', function() {
      assert.deepEqual(castArray(), []);
    });
  });

  describe('24.3. Test with array of arrays ([["a", "b"]])', function() {
    it('Should return the same value as parameter', function() {
      assert.deepEqual(castArray(arr), [['a', 'b']]);
    });
  });

  describe('24.4. Test with multiple parameters ("a", 12, true)', function() {
    it('Should return ["a"]', function() {
      assert.deepEqual(castArray('a', 12, true), ['a']);
    });
  });
});
