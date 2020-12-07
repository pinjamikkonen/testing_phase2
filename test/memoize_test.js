import pkg from 'chai'
import memoize from '../src/memoize.js'
var { assert, expect, should } = pkg;

const object = { 'a': 1, 'b': 2 }
const other = { 'c': 3, 'd': 4 }
var values;

describe('42. memoize', function() {
  describe('42.1. Memoize test 1', function() {
    it('Should return [1,2]', function() {
      values = memoize(values);
      assert.equal(values(object), [1,2])
    });
  });
});
