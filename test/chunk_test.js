import pkg from 'chai'
import chunk from '../src/chunk.js'
var { assert, expect, should } = pkg;

describe('chunk', function() {
  describe('[a, b, c, d], 2', function() {
    it('Should return [[a, b], [c, d]]', function() {
      assert.equal(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
    });
  });
});
