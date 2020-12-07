import pkg from 'chai'
import ceil from '../src/ceil.js'
var { assert, expect, should } = pkg;

describe('36. ceil', function() {

  describe('36.1. Input is 6.004', function() {
    it('Should return 6', function() {
      assert.equal(ceil(6.004, 2), 6.01);
    });
  });

  describe('36.2. Input is smaller than the ceiling', function() {
    it('Should return 1000', function() {
      assert.equal(ceil(2.3, -3), 1000);
    });
  });

  // describe('36.3. Input is a NaN', function() {
  //   it('Should return 1000', function() {
  //     assert.equal(ceil(NaN, -3), NaN);
  //   });
  // });
});
