import pkg from 'chai'
import at from '../src/at.js'
var { assert } = pkg;

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe('at', function() {
  describe('Test with nonexistent value', function() {
    it('Should recover', function() {
      assert.deepEqual(at(object, ['e']), [undefined]);
    });
  });
});
