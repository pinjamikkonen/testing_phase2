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

describe('keys', function() {

  describe('x.1. test (string)', function() {
    it('Should return [0, 1, 2, 3]', function() {
      assert.deepEqual(keys('test'), ['0', '1', '2', '3']);
    });
  });

  describe('x.2. test_object', function() {
    it('Should return [a, b, c]', function() {
      assert.deepEqual(keys(test_object), ['a', 'b', 'c']);
    });
  });

  describe('x.3. Function', function() {
    it('Should return []', function() {
      assert.deepEqual(keys(Function), []);
    });
  });

  describe('x.4. null', function() {
    it('Should return []', function() {
      assert.deepEqual(keys(null), []);
    });
  });

  describe('x.5. test_object2, test_object2', function() {
    it('Should recover from two parameters', function() {
      assert.deepEqual(keys(test_object, test_object2.c), ['a', 'b', 'c']);
    });
  });

  describe('x.6. test_object2.c', function() {
    it('Should return [0, 1, 2]', function() {
      assert.deepEqual(keys(test_object2.c), ['0', '1', '2']);
    });
  });

  describe('x.6. Empty input', function() {
    it('Should return []', function() {
      assert.deepEqual(keys(), []);
    });
  });
});
