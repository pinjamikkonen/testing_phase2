import pkg from 'chai'
import reduce from '../src/reduce.js'
var { assert, expect, should } = pkg;

describe('reduce', function() {

  describe('x.1. [1, 2], (sum, n) => sum + n, 0', function() {
    it('Should return 3', function() {
      assert.deepEqual(reduce([1, 2], (sum, n) => sum + n, 0), 3);
    });
  });

  describe('x.2. The example function', function() {
    it('Should return { 1: [a, c], 2: [b] }', function() {
      assert.deepEqual(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
          return result
        }, {}), { '1': ['a', 'c'], '2': ['b'] });
    });
  });

  describe('x.3. [1, 2, 3, 4], (sum, n) => sum * n, -3', function() {
    it('Should return 24', function() {
      assert.deepEqual(reduce([1, 2, 3, 4], (sum, n) => sum * n, 1), 24);
    });
  });

  describe('x.4. Missing parameter: [1, 2], (sum, n) => sum + n', function() {
    it('Should recover', function() {
      assert.deepEqual(reduce([1, 2, 13], (sum, n) => sum + n), 16);
    });
  });

  describe('x.5. Missing parameter: (sum, n) => sum + n', function() {
    it('Should recover', function() {
      assert.deepEqual(reduce((sum, n) => sum + n), undefined);
    });
  });

  describe('x.6. Empty input', function() {
    it('Should return undefined', function() {
      assert.deepEqual(reduce(), undefined);
    });
  });

  // describe('x.7. Missing values: [1, 2]', function() {
  //   it('Should not crash', function() {
  //     assert.deepEqual(reduce([1, 2]), undefined);
  //   });
  // });

  describe('x.7. reduce([1, 2, 3, 4], (sum, n) => kissa, 1', function() {
    it('Should not crash', function() {
      assert.deepEqual(reduce([1, 2, 3, 4], (sum, n) => 'kissa', 1), 'kissa');
    });
  });
});
