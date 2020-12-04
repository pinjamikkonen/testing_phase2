/*import pkg from 'chai'
import get from '../src/get.js'
var { assert, expect, should } = pkg;

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('get', function() {

  describe('object, a[0].b.c', function() {
    it('Should return 3', function() {
      assert.equal(get(object, 'a[0].b.c'), 3);
    });
  });

  describe('object, [a, 0, b, c]', function() {
    it('Should return 3', function() {
      assert.equal(get(object, ['a', '0', 'b', 'c']), 3);
    });
  });

  describe('object, a.b.c, default', function() {
    it('Should return default', function() {
      assert.equal(get(object, 'a.b.c', 'default'), 'default');
    });
  });

  describe('object, a.b.c', function() {
    it('Should return undefined', function() {
      assert.equal(get(object, 'a.b.c'), undefined);
    });
  });

  describe('object, a.b.c, idk bruh', function() {
    it('Should return idk bruh', function() {
      assert.equal(get(object, 'a.b.c', 'idk bruh'), 'idk bruh');
    });
  });

  describe('string, 0, default', function() {
    it('Should return s', function() {
      assert.equal(get('string', 0, 'default'), 's');
    });
  });

  describe('string, -55, default', function() {
    it('Should return default', function() {
      assert.equal(get('string', -55, 'default'), 'default');
    });
  });

  describe('string, -55', function() {
    it('Should not crash', function() {
      assert.equal(get('string', -55), undefined);
    });
  });
});
*/
