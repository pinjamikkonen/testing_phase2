import pkg from 'chai'
import castArray from '../src/castArray.js'
var { assert } = pkg;

var arr = [['a', 'b']]

describe('castArray', function() {
  describe('Test with an int', function() {
    it('Should return parameters as an array', function() {
      assert.deepEqual(castArray(1), [1]);
    });
  });

  describe('Test with no parameters', function() {
    it('Should return an enpty array', function() {
      assert.deepEqual(castArray(), []);
    });
  });

  describe('Test with array of arrays', function() {
    it('Should return the same value as parameter', function() {
      assert.deepEqual(castArray(arr), [['a', 'b']]);
    });
  });

  describe('Test with multiple parameters', function() {
    it('Should restore', function() {
      assert.isOk(castArray('a', 12, true));
    });
  });
});
