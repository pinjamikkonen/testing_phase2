import pkg from 'chai'
import isBuffer from '../src/isBuffer.js'
var { assert, expect, should } = pkg;

describe('29. isBuffer', function() {

  describe('29.1. Input is a buffer object (new Buffer(2))', function() {
    it('Should return true', function() {
      assert.equal(isBuffer(new Buffer(2)), true);
    });
  });

  describe('29.2. Input is a buffer object (new Buffer([1, 2, 3]))', function() {
    it('Should return true', function() {
      assert.equal(isBuffer(new Buffer([1, 2, 3])), true);
    });
  });

  describe('29.3. Input is a buffer object (new Buffer("test"))', function() {
    it('Should return true', function() {
      assert.equal(isBuffer(new Buffer('test')), true);
    });
  });

  describe('29.4. Input is Uint8Array (new Uint8Array(2))', function() {
    it('Should return false', function() {
      assert.equal(isBuffer(new Uint8Array(2)), false);
    });
  });

  describe('29.5. Input is boolean (true)', function() {
    it('Should return false', function() {
      assert.equal(isBuffer(true), false);
    });
  });

  describe('29.6. Input is a number (11)', function() {
    it('Should return false', function() {
      assert.equal(isBuffer(11), false);
    });
  });
});
