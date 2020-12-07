import pkg from 'chai'
import keys from '../src/keys.js'
var { assert, expect, should } = pkg;

const test_object = {
  a: 'a_string',
  b: 55,
  c: false
};

const test_object2 = {
  a: 'a_string',
  b: 55,
  c: [1, 2, 3]
};

describe('34. keys', function() {

  describe('34.1. Input is a string ("test")', function() {
    it('Should return [0, 1, 2, 3]', function() {
      assert.deepEqual(keys('test'), ['0', '1', '2', '3']);
    });
  });

  describe('34.2. Input is an object (test_object)', function() {
    it('Should return [a, b, c]', function() {
      assert.deepEqual(keys(test_object), ['a', 'b', 'c']);
    });
  });

  describe('34.3. Input is a function object (Function)', function() {
    it('Should return []', function() {
      assert.deepEqual(keys(Function), []);
    });
  });

  describe('34.4. Input is null', function() {
    it('Should return []', function() {
      assert.deepEqual(keys(null), []);
    });
  });

  describe('34.5. Input is two test objects (test_object2, test_object2.c)', function() {
    it('Should recover from two parameters', function() {
      assert.deepEqual(keys(test_object, test_object2.c), ['a', 'b', 'c']);
    });
  });

  describe('34.6. Input is an object (test_object2.c)', function() {
    it('Should return [0, 1, 2]', function() {
      assert.deepEqual(keys(test_object2.c), ['0', '1', '2']);
    });
  });

  describe('34.7. Empty input', function() {
    it('Should return []', function() {
      assert.deepEqual(keys(), []);
    });
  });
});
