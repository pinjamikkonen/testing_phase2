import pkg from 'chai'
import compact from '../src/compact.js'
var { assert, expect, should } = pkg;

describe('3. compact', function() {
  describe('3.1. Array with removable content', function() {
    it('Should return [0, 1, 2, 3]', function() {
      var arr = [0, 1, false, 2, '', 3];
      assert.equal(compact(arr), [0, 1, 2, 3]);
    });
  });

  describe('3.2. Array with only numbers', function() {
    it('Should return array of numbers', function() {
      var arr = [-12, 1, 4.5, 2, 11, 3];
      assert.equal(compact(arr), [-12, 1, 4.5, 2, 11, 3]);
    });
  });
});
