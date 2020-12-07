import pkg from 'chai'
import drop from '../src/drop.js'
var { assert, expect, should } = pkg;

describe('39. drop', function() {
  describe('39.1. An array given as parameter ([1, 2, 3])', function() {
    it('Should return [2, 3]', function() {
      assert.deepEqual(drop([1, 2, 3]), [2, 3]);
    });
  });

  describe('39.2. An array and drop value given as parameters ([1, 2, 3], 2)', function() {
    it('Should return [3]', function() {
      assert.deepEqual(drop([1, 2, 3], 2), [3]);
    });
  });

  describe('39.3. An array and a large drop value given as parameters ([1, 2, 3], 5)', function() {
    it('Should return []', function() {
      assert.deepEqual(drop([1, 2, 3], 5), []);
    });
  });

  describe('39.4. An array and zero drop value given as parameters ([1, 2, 3], 0)', function() {
    it('Should return [1, 2, 3]', function() {
      assert.deepEqual(drop([1, 2, 3], 0), [1, 2, 3]);
    });
  });

  describe('39.5. Wrong inputs given ("test_string", NaN)', function() {
    it('Should recover', function() {
      assert.isOk(drop('test_string', NaN));
    });
  });
});
