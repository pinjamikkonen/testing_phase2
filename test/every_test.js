import pkg from 'chai'
import every from '../src/every.js'
var { assert, expect, should } = pkg;

describe('every', function() {
  describe('[true, false], Boolean', function() {
    it('Should return true', function() {
      assert.equal(every([true, false], Boolean), true);
    });
  });

  describe('[true, 1, null, yes], Boolean', function() {
    it('Should return false', function() {
      assert.equal(every([true, 14, null, 'yes'], Boolean), false);
    });
  });

  describe('str', function() {
    it('Should return true', function() {
      assert.equal(every(['sana'], String), true);
    });
  });

  describe('str x 2', function() {
    it('Should return true', function() {
      assert.equal(every(['sana', 'toinen'], String), true);
    });
  });

  describe('str x 2', function() {
    it('Should return false', function() {
      assert.equal(every(['sana', 'toinen', 15, true, null], String), false);
    });
  });

  describe('Inttejä', function() {
    it('Should return true', function() {
      assert.equal(every([2, 1, 55], Number), true);
    });
  });

  describe('Inttejä', function() {
    it('Should return true', function() {
      assert.equal(every([2, 1, 55, true], Number), true);
    });
  });
});
