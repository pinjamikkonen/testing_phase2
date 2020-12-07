import pkg from 'chai'
import clamp from '../src/clamp.js'
var { assert, expect, should } = pkg;

describe('37. clamp', function() {
  describe('37.1. Negative clamp value (-10, -5, 5)', function() {
    it('Should return -5', function() {
      assert.equal(clamp(-10, -5, 5), -5);
    });
  });

  describe('37.2. Positive clamp value (10, -5, 5)', function() {
    it('Should return 5', function() {
      assert.equal(clamp(10, -5, 5), 5);
    });
  });

  describe('37.3. Positive clamp value (-5, 5, 10', function() {
    it('Should return 5', function() {
      assert.equal(clamp(-5, 5, 10), 5);
    });
  });

  describe('37.4. Missing input value (12, 6)', function() {
    it('Should recover', function() {
      assert.equal(clamp(12, 6), 6);
    });
  });

  describe('37.5. Wrong input type (NaN, "string")', function() {
    it('Should recover', function() {
      assert.deepEqual(clamp(NaN, 'string'), NaN);
    });
  });
});
