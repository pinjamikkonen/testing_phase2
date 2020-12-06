import pkg from 'chai'
import isSymbol from '../src/isSymbol.js'
var { assert, expect, should } = pkg;

describe('33. isSymbol', function() {

  describe('33.1. Input is a symbol object (Symbol.iterator)', function() {
    it('Should return true', function() {
      assert.equal(isSymbol(Symbol.iterator), true);
    });
  });

  describe('33.2. Input is a symbol object (Symbol("foo"))', function() {
    it('Should return true', function() {
      assert.equal(isSymbol(Symbol('foo')), true);
    });
  });

  describe('33.3. Input is a string ("abc")', function() {
    it('Should return false', function() {
      assert.equal(isSymbol('abc'), false);
    });
  });

  describe('33.4. Input is a number (55)', function() {
    it('Should return false', function() {
      assert.equal(isSymbol(55), false);
    });
  });

  describe('33.5. Input is null', function() {
    it('Should return false', function() {
      assert.equal(isSymbol(null), false);
    });
  });

  describe('33.6. Empty value', function() {
    it('Should return false', function() {
      assert.equal(isSymbol(), false);
    });
  });
});
