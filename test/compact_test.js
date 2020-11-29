import pkg from 'chai'
import compact from '../src/compact.js'
var { assert } = pkg;


describe('compact', function() {
  describe('Array with removable content', function() {
    it('Should return [6, 4, 2, 3]', function() {
      var arr = [0, 1, false, 2, '', 3];
      assert.equal(compact(arr), [1, 2, 3]);
    });
  });

  describe('Array with only numbers', function() {
    it('Should return array of numbers', function() {
      var arr = [-12, 1, 4.5, 2, 11, 3];
      assert.equal(compact(arr), [-12, 1, 4.5, 2, 11, 3]);
    });
  });

  describe('Array with no numbers', function() {
    it('Should return array of numbers', function() {
      var arr = ['variable', 'hmh', null, undefined, true];
      assert.equal(compact(arr), []);
    });
  });
});
