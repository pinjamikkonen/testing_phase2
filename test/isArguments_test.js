import pkg from 'chai'
import isArguments from '../src/isArguments.js'
var { assert, expect, should } = pkg;

function testfunction (a){
  return a + a
}

function testfunction2 (){
  return arguments
}

describe('28. isArguments', function() {
  describe('28.1. Call function, return arguments (function() { return arguments }())', function() {
    it('Should return true', function() {
      assert.equal(isArguments(function() { return arguments }()), true);
    });
  });

  describe('28.2. Call function testfunction() (testfunction(1))', function() {
    it('Should return false', function() {
      assert.equal(isArguments(testfunction(1)), false);
    });
  });

  describe('28.3. Call function testfunction2() (testfunction2())', function() {
    it('Should return true', function() {
      assert.equal(isArguments(testfunction2()), true);
    });
  });

  describe('28.4. Call function testfunction2() (testfunction("arguments"))', function() {
    it('Should return false', function() {
      assert.equal(isArguments(testfunction('arguments')), false);
    });
  });

  describe('28.5. Input is an array array ([1, 2, 3])', function() {
    it('Should return false', function() {
      assert.equal(isArguments([1, 2, 3]), false);
    });
  });

  describe('28.6. Input is a string ("arguments")', function() {
    it('Should return false', function() {
      assert.equal(isArguments('arguments'), false);
    });
  });
});
