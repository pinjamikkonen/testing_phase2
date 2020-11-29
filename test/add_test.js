import pkg from 'chai'
import add from '../src/add.js'
var { assert } = pkg;


describe('add', function() {
  describe('Two positive integers', function() {
    it('Should return the sum of integers', function() {
      assert.equal(add(6, 4), 10);
    });
  });

  describe('Two negative integers', function() {
    it('Should return the sum of integers', function() {
      assert.equal(add(-6, -4), -10);
    });
  });
});
