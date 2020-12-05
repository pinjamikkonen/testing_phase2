import pkg from 'chai'
import isBuffer from '../src/isBuffer.js'
var { assert, expect, should } = pkg;

describe('isBuffer', function() {

  // describe('x.x. new Buffer(2)', function() {
  //   it('Should return true', function() {
  //     assert.equal(isBuffer(new Buffer(2)), true);
  //   });
  // });
  //
  // describe('x.x. new Buffer([1, 2, 3])', function() {
  //   it('Should return true', function() {
  //     assert.equal(isBuffer(new Buffer([1, 2, 3])), true);
  //   });
  // });
  //
  // describe('x.x. new Buffer(aa)', function() {
  //   it('Should return true', function() {
  //     assert.equal(isBuffer(new Buffer('aa')), true);
  //   });
  // });

  describe('x.x. new Uint8Array(2)', function() {
    it('Should return false', function() {
      assert.equal(isBuffer(new Uint8Array(2)), false);
    });
  });

  describe('x.x. true', function() {
    it('Should return false', function() {
      assert.equal(isBuffer(true), false);
    });
  });

  describe('x.x. 11', function() {
    it('Should return false', function() {
      assert.equal(isBuffer(11), false);
    });
  });
});
