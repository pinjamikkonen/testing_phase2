import pkg from 'chai'
import chunk from '../src/chunk.js'
var { assert, expect, should } = pkg;

// HOX HULLUSTI ERROREITA

describe('chunk', function() {
//   describe('[a, b, c, d], 2', function() {
//     it('Should return [[a, b], [c, d]]', function() {
//       assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), ([['a', 'b'], ['c', 'd']]));
//     });
//   });
//
//   describe('[a, b, c, d], 3', function() {
//     it('Should return [[a, b, c], [d]]', function() {
//       assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 3), ([['a', 'b', 'c'], ['d']]));
//     });
//   });

  describe('[a, b, c, d], 4', function() {
    it('Should return [[a, b], [c, d]]', function() {
      assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 4), ([['a', 'b', 'c', 'd']]));
    });
  });

  // describe('[a, b, c, d, e, f, g], 2', function() {
  //   it('Should return [[a, b], [c, d], [e, f], [g]]', function() {
  //     assert.deepEqual(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2), ([['a', 'b'], ['c', 'd'], ['e', 'f'], ['g']]));
  //   });
  // });

  describe('[a, b, c, d], 0', function() {
    it('Should return []', function() {
      assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 0), []);
    });
  });

  // describe('chunk, 2', function() {
  //   it('Should return [c, h], [u, n], [k]', function() {
  //     assert.deepEqual(chunk('chunk', 2), [['c', 'h'], ['u', 'n'], ['k']]);
  //   });
  // });
});
