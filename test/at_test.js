import pkg from 'chai'
import at from '../src/at.js'
var { assert } = pkg;

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe('at', function() {
  describe('Test with valid parameters', function() {
    it('Should return array with 3 and 4', function() {
      assert.deepEqual(at(object, ['a[0].b.c', 'a[1]']), [3,4]);
    });
  });

  describe('Test index out of bounds error', function() {
    it('Should recover', function() {
      assert.deepEqual(at(object, ['a[4].b.c']), [undefined]);
    });
  });

  describe('Test with nonexistent value', function() {
    it('Should recover', function() {
      assert.deepEqual(at(object, ['e']), [undefined]);
    });
  });
});
