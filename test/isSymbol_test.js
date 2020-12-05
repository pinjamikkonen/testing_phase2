import pkg from 'chai'
import isSymbol from '../src/isSymbol.js'
var { assert, expect, should } = pkg;

describe('isSymbol', function() {

  describe('x.1. Symbol.iterator', function() {
    it('Should return true', function() {
      assert.equal(isSymbol(Symbol.iterator), true);
    });
  });

  describe('x.2. Symbol(foo)', function() {
    it('Should return true', function() {
      assert.equal(isSymbol(Symbol('foo')), true);
    });
  });

  describe('x.3. abc', function() {
    it('Should return false', function() {
      assert.equal(isSymbol('abc'), false);
    });
  });

  describe('x.4. 55', function() {
    it('Should return false', function() {
      assert.equal(isSymbol(55), false);
    });
  });

  describe('x.5. null', function() {
    it('Should return false', function() {
      assert.equal(isSymbol(null), false);
    });
  });

  describe('x.6. Empty value', function() {
    it('Should return false', function() {
      assert.equal(isSymbol(), false);
    });
  });
});
