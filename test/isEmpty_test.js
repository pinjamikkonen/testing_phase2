import pkg from 'chai'
import isEmpty from '../src/isEmpty.js'
var { assert, expect, should } = pkg;

let set1 = new Set();
let set2 = new Set();
set2.add(1)

describe('13. isEmpty', function() {

  describe('13.1. A null value', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(null), true);
    });
  });

  describe('13.2. A NaN value', function() {
    it('Should return true', function() {
      assert.deepEqual(isEmpty(NaN), true);
    });
  });

  describe('13.3. An array ([1, 2, 3])', function() {
    it('Should return false', function() {
      assert.equal(isEmpty([1, 2, 3]), false);
    });
  });

  describe('13.4. A number (1)', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(1), true);
    });
  });

  describe('13.5. A string ("abc")', function() {
    it('Should return false', function() {
      assert.equal(isEmpty('abc'), false);
    });
  });

  describe('13.6. A tuple ({"a" : 1})', function() {
    it('Should return false', function() {
      assert.equal(isEmpty({'a': 1}), false);
    });
  });

  describe('13.7. An array of null values ([null, null, null])', function() {
    it('Should return false', function() {
      assert.equal(isEmpty([null, null, null]), false);
    });
  });

  describe('13.8. An empty object (set1)', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(set1), true);
    });
  });

  describe('13.9. A non-empty object (set2)', function() {
    it('Should return false', function() {
      assert.equal(isEmpty(set2), false);
    });
  });

  describe('13.10 An empty string', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(''), true);
    });
  });
});
