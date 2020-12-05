import pkg from 'chai'
import defaultTo from '../src/defaultTo.js'
var { assert, expect, should } = pkg;


describe('defaultTo', function() {
  describe('Valid number and default value', function() {
    it('Should return 1', function() {
      assert.equal(defaultTo(1, 10), 1);
    });
  });

  describe('Invalid number and default value', function() {
    it('Should return 11', function() {
      assert.equal(defaultTo(undefined, 11), 11);
    });
  });

  describe('Invalid number with invalid default value', function() {
    it('Should not crash', function() {
      assert.equal(defaultTo(null, null), null);
    });
  });

  // TODO: That probably shouldn't be there
  describe('Invalid number with a string', function() {
    it('Should (probably) give "g"', function() {
      assert.equal(defaultTo(null, 'g'), 'g');
    });
  });

  // Is this supposed to be like that, is it supposed to return 10
  describe('NaN number with default value', function() {
    it('Should return 10', function() {
      assert.equal(defaultTo(NaN, 10), 10);
    });
  });
});
