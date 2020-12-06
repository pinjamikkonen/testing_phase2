import pkg from 'chai'
import defaultTo from '../src/defaultTo.js'
var { assert, expect, should } = pkg;


describe('4. defaultTo', function() {
  describe('4.1. Valid number and default value (1, 10)', function() {
    it('Should return 1', function() {
      assert.equal(defaultTo(1, 10), 1);
    });
  });

  describe('4.2. Valid string and default value (test_string, default_string)', function() {
    it('Should return "test_string"', function() {
      assert.equal(defaultTo('test_string', 'default_string'), 'test_string');
    });
  });

  describe('4.3. Invalid number and default value (undefined, 11)', function() {
    it('Should return 11', function() {
      assert.equal(defaultTo(undefined, 11), 11);
    });
  });

  describe('4.4. Invalid number with invalid default value (null, null)', function() {
    it('Should return null', function() {
      assert.equal(defaultTo(null, null), null);
    });
  });

  describe('4.5. Invalid number with a string as default value (null, "g")', function() {
    it('Should return "g"', function() {
      assert.equal(defaultTo(null, 'g'), 'g');
    });
  });

  describe('4.6. NaN number with default value (NaN, 10)', function() {
    it('Should return 10', function() {
      assert.equal(defaultTo(NaN, 10), 10);
    });
  });

  describe('4.7. Empty input', function() {
    it('Should return undefined', function() {
      assert.equal(defaultTo(), undefined);
    });
  });
});
