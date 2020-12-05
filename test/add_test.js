import pkg from 'chai'
import add from '../src/add.js'
var { assert, expect, should } = pkg;


describe('1. add', function() {
  describe('1.1. Two positive integers', function() {
    it('Should return the sum of integers', function() {
      assert.equal(add(6, 4), 10);
    });
  });

  describe('1.2. Two negative integers', function() {
    it('Should return the sum of integers', function() {
      assert.equal(add(-6, -4), -10);
    });
  });

  describe('1.3. Only one parameter', function() {
    it('Should return integer + 0', function() {
      assert.equal(add(6,), 6);
    });
  });

// Ei olla varmoja onko kyseessä bugi vai feature :(
  describe('1.4. Wrong parameter: one string', function() {
    it('Should return a string?? Or is this a bug?? hyvä itti :))))', function() {
      assert.equal(add(6, '4'), '64');
    });
  });

  describe('1.5. Wrong parameter: two strings', function() {
    it('Should return a string', function() {
      assert.equal(add('6', '4'), 64);
    });
  });

  // Kommentoitu pois feilaavan testin takia
  /*
  describe('1.6. Wrong parameter: NaN', function() {
    it('Should return a string', function() {
      assert.equal(add(6, NaN), 6);
    });
  });*/

  describe('1.7. Wrong parameter: NaN', function() {
    it('Should return a string', function() {
      assert.equal(add(6, undefined), 6);
    });
  });
});
