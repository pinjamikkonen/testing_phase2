import pkg from 'chai'
import isArrayLike from '../src/isArrayLike.js'
var { assert, expect, should } = pkg;


describe('isArrayLike', function() {
  describe('[1, 2, 3]', function() {
    it('Should return true', function() {
      assert.equal(isArrayLike([1, 2, 3]), true);
    });
  });
});
