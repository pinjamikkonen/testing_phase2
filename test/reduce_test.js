import pkg from 'chai'
import reduce from '../src/reduce.js'
var { assert, expect, should } = pkg;

describe('17. reduce', function() {

  describe('17.1. An array and a function ([1, 2], (sum, n) => sum + n, 0)', function() {
    it('Should return 3', function() {
      assert.deepEqual(reduce([1, 2], (sum, n) => sum + n, 0), 3);
    });
  });

  describe('17.2. The example function', function() {
    it('Should return { 1: [a, c], 2: [b] }', function() {
      assert.deepEqual(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
          return result
        }, {}), { '1': ['a', 'c'], '2': ['b'] });
    });
  });

  describe('17.3. An array and a function ([1, 2, 3, 4], (sum, n) => sum * n, -3)', function() {
    it('Should return 24', function() {
      assert.deepEqual(reduce([1, 2, 3, 4], (sum, n) => sum * n, 1), 24);
    });
  });

  describe('17.4. Missing parameter ([1, 2], (sum, n) => sum + n)', function() {
    it('Should recover', function() {
      assert.deepEqual(reduce([1, 2, 13], (sum, n) => sum + n), 16);
    });
  });

  describe('17.5. Missing parameter ((sum, n) => sum + n)', function() {
    it('Should return undefined', function() {
      assert.deepEqual(reduce((sum, n) => sum + n), undefined);
    });
  });

  describe('17.6. Empty input', function() {
    it('Should return undefined', function() {
      assert.deepEqual(reduce(), undefined);
    });
  });

  describe('17.7. Missing values ([1, 2])', function() {
    it('Should not crash', function() {
      assert.deepEqual(reduce([1, 2]), undefined);
    });
  });
});
