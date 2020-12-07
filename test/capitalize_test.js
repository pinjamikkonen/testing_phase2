import pkg from 'chai'
import capitalize from '../src/capitalize.js'
var { assert, expect, should } = pkg;

describe('23. capitalize', function() {
  describe('23.1. A string ("function")', function() {
    it('Should return "Function"', function() {
      assert.deepEqual(capitalize('function'), 'Function');
    });
  });

  describe('23.2. A string ("FRED")', function() {
    it('Should return "Fred"', function() {
      assert.deepEqual(capitalize('FRED'), 'Fred');
    });
  });

  describe('23.3. A string with whitespaces ("  fred")', function() {
    it('Should return "Fred"', function() {
      assert.deepEqual(capitalize('   fred'), 'Fred');
    });
  });

  describe('23.4. String with special characters ("[FRED]")', function() {
    it('Should return [fred]', function() {
      assert.deepEqual(capitalize('[FRED]'), '[fred]');
    });
  });

  describe('23.5. A string of special characters ("****")', function() {
    it('Should return "****"', function() {
      assert.deepEqual(capitalize('****'), '****');
    });
  });

  describe('23.6. An array of numbers [1, 2, 3]', function() {
    it('Shouldnt crash', function() {
      expect.fail(capitalize([1, 2, 3]));
    });
  });

  describe('23.7. An empty string ("")', function() {
    it('Empty string', function() {
      assert.equal(capitalize(''), '');
    });
  });

  describe('23.8. A null value (null)', function() {
    it('null', function() {
      assert.equal(capitalize(null), null);
    });
  });
});
