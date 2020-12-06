import pkg from 'chai'
import at from '../src/at.js'
var { assert } = pkg;

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe('2. at', function() {
  describe('2.1. object, a[0].b.c, a[1]', function() {
    it('Should return array with [3, 4]', function() {
      assert.deepEqual(at(object, ['a[0].b.c', 'a[1]']), [3, 4]);
    });
  });

  describe('2.2. Test index out of bounds error (object, [a[4].b.c])', function() {
    it('Should return undefined', function() {
      assert.deepEqual(at(object, ['a[4].b.c']), [undefined]);
    });
  });

  describe('2.3. Test with nonexistent value (object, [e])', function() {
    it('Should return undefined', function() {
      assert.deepEqual(at(object, ['e']), [undefined]);
    });
  });
});
