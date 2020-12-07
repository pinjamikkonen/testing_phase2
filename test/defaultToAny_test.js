import pkg from 'chai'
import defaultToAny from '../src/defaultToAny.js'
var { assert, expect, should } = pkg;


describe('4. defaultToAny', function() {
  describe('4.1. All values numbers (1, 10, 20)', function() {
    it('Should return first value (1)', function() {
      assert.equal(defaultToAny(1, 10, 20), 1);
    });
  });

  describe('4.2. First value undefined (undefined, 10, 20)', function() {
    it('Should return second value (10)', function() {
      assert.equal(defaultToAny(undefined, 10, 20), 10);
    });
  });

  describe('4.3. First value undefined, and second value null (undefined, null, 20)', function() {
    it('Should return third value (20)', function() {
      assert.equal(defaultToAny(undefined, null, 20), 20);
    });
  });

  describe('4.4. Values undefined, null, NaN', function() {
    it('Should return NaN', function() {
      assert.deepEqual(defaultToAny(undefined, null, NaN), NaN);
    });
  });

  describe('4.5. Values undefined, null', function() {
    it('Should return null', function() {
      assert.equal(defaultToAny(undefined, null), null);
    });
  });

  describe('4.6. Empty input', function() {
    it('Should return undefined', function() {
      assert.equal(defaultToAny(), undefined);
    });
  });

  describe('4.6. Values NaN, 10', function() {
    it('Should return 10', function() {
      assert.equal(defaultToAny(NaN, 10), 10);
    });
  });
});
