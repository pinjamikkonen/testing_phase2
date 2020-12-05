import pkg from 'chai'
import eq from '../src/eq.js'
var { assert, expect, should } = pkg;

describe('eq', function() {
  describe('{a : 1}, {a : 1}', function() {
    it('Should return true', function() {
      const object = { 'a': 1 }
      const other = { 'a': 1 }

      assert.equal(eq(object, object), true);
    });
  });

  describe('{a : 1}, {a : 1}', function() {
    it('Should return false', function() {
      const object = { 'a': 1 }
      const other = { 'a': 1 }

      assert.equal(eq(object, other), false);
    });
  });

  describe('a, a', function() {
    it('Should return true', function() {
      assert.equal(eq('a', 'a'), true);
    });
  });

  // Mitähän nyt taas
  describe('a, Object(a)', function() {
    it('Should return false', function() {
      assert.equal(eq('a', Object('a')), false);
    });
  });

  describe('NaN, NaN', function() {
    it('Should return true', function() {
      assert.equal(eq(NaN, NaN), true);
    });
  });

  describe('NaN, NaN', function() {
    it('Should return true', function() {
      assert.equal(eq(), true);
    });
  });
});
