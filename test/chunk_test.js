import pkg from 'chai'
import chunk from '../src/chunk.js'
var { assert, expect, should } = pkg;

describe('25. chunk', function() {
  // describe('25.1. An array and an integer ([a, b, c, d], 2)', function() {
  //   it('Should return [[a, b], [c, d]]', function() {
  //     assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), ([['a', 'b'], ['c', 'd']]));
  //   });
  // });
  //
  // describe('25.2. An array and an integer ([a, b, c, d], 3)', function() {
  //   it('Should return [[a, b, c], [d]]', function() {
  //     assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 3), ([['a', 'b', 'c'], ['d']]));
  //   });
  // });
  //
  // describe('25.3. An array and an integer ([a, b, c, d], 6)', function() {
  //   it('Should return [a, b, c, d]', function() {
  //     assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 6), ([['a', 'b', 'c', 'd']]));
  //   });
  // });
  //
  // describe('25.4. An array and an integer ([a, b, c, d, e, f, g], 2)', function() {
  //   it('Should return [[a, b], [c, d], [e, f], [g]]', function() {
  //     assert.deepEqual(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2), ([['a', 'b'], ['c', 'd'], ['e', 'f'], ['g']]));
  //   });
  // });

  describe('25.5. An array and an integer ([a, b, c, d], 0)', function() {
    it('Should return []', function() {
      assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 0), []);
    });
  });

  // describe('25.6. A string and an integer (chunk, 2)', function() {
  //   it('Should return [c, h], [u, n], [k]', function() {
  //     assert.deepEqual(chunk('chunk', 2), [['c', 'h'], ['u', 'n'], ['k']]);
  //   });
  // });

  describe('25.7. A string and null (chunk, null)', function() {
    it('Should return an empty array []', function() {
      assert.deepEqual(chunk('chunk', null), []);
    });
  });
});
