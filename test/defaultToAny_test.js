import pkg from 'chai'
import defaultToAny from '../src/defaultToAny.js'
var { assert, expect, should } = pkg;


describe('defaultToAny', function() {
  describe('Positive values', function() {
    it('Should return first value', function() {
      assert.equal(defaultToAny(1, 10, 20), 1);
    });
  });

  describe('Positive values', function() {
    it('Should return second value', function() {
      assert.equal(defaultToAny(undefined, 10, 20), 10);
    });
  });

  describe('Positive values', function() {
    it('Should return third value', function() {
      assert.equal(defaultToAny(undefined, null, 20), 20);
    });
  });

  describe('Positive values', function() {
    it('Should return NaN: BUGI LÖYDETTY??', function() {
      assert.equal(defaultToAny(undefined, null, NaN), NaN);
    });
  });

  describe('Positive values', function() {
    it('Should return undefined', function() {
      assert.equal(defaultToAny(undefined, null), null);
    });
  });

  describe('Empty array', function() {
    it('Idk man', function() {
      assert.equal(defaultToAny(), undefined);
    });
  });
});
