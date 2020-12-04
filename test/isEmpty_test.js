import pkg from 'chai'
import isEmpty from '../src/isEmpty.js'
var { assert, expect, should } = pkg;

let set1 = new Set();
let set2 = new Set();
set2.add(1)

describe('isEmpty', function() {
  describe('null', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(null), true);
    });
  });

  describe('NaN', function() {
    it('Should return true', function() {
      assert.deepEqual(isEmpty(NaN), true);
    });
  });

  describe('[1, 2, 3]', function() {
    it('Should return false', function() {
      assert.equal(isEmpty([1, 2, 3]), false);
    });
  });

  describe('null', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(null), true);
    });
  });

  describe('1', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(1), true);
    });
  });

  describe('abc', function() {
    it('Should return false', function() {
      assert.equal(isEmpty('abc'), false);
    });
  });

  describe('a : 1', function() {
    it('Should return false', function() {
      assert.equal(isEmpty({'a': 1}), false);
    });
  });

  describe('[null, null, null]', function() {
    it('Should return false', function() {
      assert.equal(isEmpty([null, null, null]), false);
    });
  });

  describe('set1', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(set1), true);
    });
  });

  describe('set2', function() {
    it('Should return false', function() {
      assert.equal(isEmpty(set2), false);
    });
  });

  describe('an empty string', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(''), true);
    });
  });
});
