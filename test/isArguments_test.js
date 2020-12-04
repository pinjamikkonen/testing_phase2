/*import pkg from 'chai'
import isArguments from '../src/isArguments.js'
var { assert, expect, should } = pkg;

// tähän kannattanee palata kun isobjectlike on testattu

function aaa (a){
  return a + a
}

function aaabbb (){
  return 'arguments';
}

describe('isArguments', function() {
  describe('funktio return arguments', function() {
    it('Should return true', function() {
      assert.equal(isArguments(function() { return arguments }()), true);
    });
  });

  describe('funktio aaa(1)', function() {
    it('Should return true', function() {
      assert.equal(isArguments(aaa(1)), true);
    });
  });

  describe('funktio aaabbb()', function() {
    it('Should return false', function() {
      assert.equal(isArguments(aaabbb()), false);
    });
  });

  describe('funktio aaa(arguments)', function() {
    it('Should return same as previous', function() {
      assert.equal(isArguments(aaa('arguments')), true);
    });
  });

  describe('[1, 2, 3]', function() {
    it('Should return false', function() {
      assert.equal(isArguments([1, 2, 3]), false);
    });
  });

  describe('silkkaa stringiä', function() {
    it('Should return false', function() {
      assert.equal(isArguments('arguments'), false);
    });
  });
});
*/
