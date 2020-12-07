import pkg from 'chai'
import map from '../src/map.js'
var { assert, expect, should } = pkg;

function square(n) {
 return n * n
}

function first(n){
  return n[0]
}

function second(n){
  return n[1]
}

describe('16. map', function() {
  describe('16.1. An array and a function ([4, 8], square)', function() {
    it('Should return [16, 64]', function() {
      assert.deepEqual(map([4, 8], square), [16, 64]);
    });
  });

  describe('16.2. A string and a function ("abc", first)', function() {
    it('Should return a, b, c', function() {
      assert.deepEqual(map('abc', first), ['a', 'b', 'c']);
    });
  });

  describe('16.3. A null value and a function (null, square)', function() {
    it('Should return []', function() {
      assert.deepEqual(map(null, square), []);
    });
  });

  // describe('16.4. An array and undefined ([4, 8], undefined)', function() {
  //   it('Should not crash', function() {
  //     assert.deepEqual(map([4, 8], undefined), undefined);
  //   });
  // });

  describe('16.5. An empty array and a function ([], square)', function() {
    it('Should return []', function() {
      assert.deepEqual(map([], square), []);
    });
  });
});
