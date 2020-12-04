import pkg from 'chai'
import isArrayLike from '../src/isArrayLike.js'
var { assert, expect, should } = pkg;


describe('isArrayLike', function() {
  describe('[1, 2, 3]', function() {
    it('Should return true', function() {
      assert.equal(isArrayLike([1, 2, 3]), true);
    });
  });

  // describe('abc', function() {
  //   it('Should return false', function() {
  //     assert.equal(isArrayLike('abc'), false);
  //   });
  // });

  describe('Function', function() {
    it('Should return false', function() {
      assert.equal(isArrayLike(Function), false);
    });
  });

  describe('null', function() {
    it('Should return false', function() {
      assert.equal(isArrayLike(null), false);
    });
  });

  describe('Empty input', function() {
    it('Should return false', function() {
      assert.equal(isArrayLike(), false);
    });
  });
});
