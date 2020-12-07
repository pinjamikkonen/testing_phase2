import pkg from 'chai'
import eq from '../src/eq.js'
var { assert, expect, should } = pkg;

const object = { 'a': 1 }
const other = { 'a': 1 }

describe('8. eq', function() {
  describe('8.1. Two identical objects (object, object)', function() {
    it('Should return true', function() {
      assert.equal(eq(object, object), true);
    });
  });

  describe('8.2. Two unidentical objects (object, other)', function() {
    it('Should return false', function() {
      assert.equal(eq(object, other), false);
    });
  });

  describe('8.3. Two identical string values ("a", "a")', function() {
    it('Should return true', function() {
      assert.equal(eq('a', 'a'), true);
    });
  });

  // describe('8.4. Two unidentical values ("a", Object("a"))', function() {
  //   it('Should return false', function() {
  //     assert.equal(eq('a', Object('a')), false);
  //   });
  // });

  describe('8.5. Two identical values (NaN, NaN)', function() {
    it('Should return true', function() {
      assert.equal(eq(NaN, NaN), true);
    });
  });

  describe('8.6. No input values', function() {
    it('Should return true', function() {
      assert.equal(eq(), true);
    });
  });

  describe('8.7. One missing value ("a")', function() {
    it('Should return false', function() {
      assert.equal(eq('a',), false);
    });
  });
});
