import pkg from 'chai'
import map from '../src/map.js'
var { assert, expect, should } = pkg;

// idk palaa tänne vielä

function square(n) {
 return n * n
}

function first(n){
  return n[0]
}

function second(n){
  return n[1]
}

describe('map', function() {
  describe('[4, 8], square', function() {
    it('Should return [16, 64]', function() {
      assert.deepEqual(map([4, 8], square), [16, 64]);
    });
  });

  describe('abc, first', function() {
    it('Should return a, b, c', function() {
      assert.deepEqual(map('abc', first), ['a', 'b', 'c']);
    });
  });

  describe('[null, null, null], square', function() {
    it('[null, null, null]', function() {
      assert.deepEqual(map([null, null, null], square), [null, null, null]);
    });
  });

  /*describe('[4, 8]', function() {
    it('Should not crash', function() {
      assert.deepEqual(map([4, 8], Function), [4, 8]);
    });
  });*/

  describe('[]', function() {
    it('Should return []', function() {
      assert.deepEqual(map([], square), []);
    });
  });
});
