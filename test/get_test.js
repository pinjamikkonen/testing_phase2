import pkg from 'chai'
import get from '../src/get.js'
var { assert, expect, should } = pkg;

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('27. get', function() {

  describe('27.1. Input is an object and a valid path (object, a[0].b.c)', function() {
    it('Should return 3', function() {
      assert.equal(get(object, 'a[0].b.c'), 3);
    });
  });

  describe('27.2. Input is an object and a valid path (object, [a, 0, b, c])', function() {
    it('Should return 3', function() {
      assert.equal(get(object, ['a', '0', 'b', 'c']), 3);
    });
  });

  describe('27.3. Input is an object, invalid path and default value (object, a.b.c, default)', function() {
    it('Should return default', function() {
      assert.equal(get(object, 'a.b.c', 'default'), 'default');
    });
  });

  describe('27.4. Input is an object and an invalid path (object, a.b.c)', function() {
    it('Should return undefined', function() {
      assert.equal(get(object, 'a.b.c'), undefined);
    });
  });

  describe('27.5. Object is an object, invalid path and a default value (object, a.b.c, "test_string")', function() {
    it('Should return "test_string"', function() {
      assert.equal(get(object, 'a.b.c', 'test_string'), 'test_string');
    });
  });

  describe('27.6. Object is a string, a valid index and a default value ("string", 0, default)', function() {
    it('Should return "s"', function() {
      assert.equal(get('string', 0, 'default'), 's');
    });
  });

  describe('27.7. Object is a string, an invalid index and a default value ("string", -55, default)', function() {
    it('Should return default', function() {
      assert.equal(get('string', -55, 'default'), 'default');
    });
  });

  describe('27.8. Object is a string and an invalid index ("string", -55)', function() {
    it('Should not crash', function() {
      assert.equal(get('string', -55), undefined);
    });
  });
});
