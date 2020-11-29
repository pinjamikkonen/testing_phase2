import pkg from 'chai'
import add from '../src/add.js'
var { assert, expect, should } = pkg;


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

  describe('Only one parameter', function() {
    it('Should return integer + 0', function() {
      assert.equal(add(6,), 6);
    });
  });

// Ei olla varmoja onko kyseessä bugi vai feature :(
  describe('Wrong parameter: one string', function() {
    it('Should return a string?? Or is this a bug??', function() {
      assert.equal(add(6, '4'), '64');
    });
  });

  describe('Wrong parameter: two strings', function() {
    it('Should return a string', function() {
      assert.equal(add('6', '4'), 64);
    });
  });
});
