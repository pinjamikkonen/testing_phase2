import pkg from 'chai'
import capitalize from '../src/capitalize.js'
var { assert, expect, should } = pkg;

describe('capitalize', function() {
  describe('function', function() {
    it('Should return Function', function() {
      assert.deepEqual(capitalize('function'), 'Function');
    });
  });

  describe('FRED', function() {
    it('Should return Fred', function() {
      assert.deepEqual(capitalize('FRED'), 'Fred');
    });
  });

  describe('Fred', function() {
    it('Should return Fred', function() {
      assert.deepEqual(capitalize('Fred'), 'Fred');
    });
  });

  describe('[FRED]', function() {
    it('Should return [fred]', function() {
      assert.deepEqual(capitalize('[FRED]'), '[fred]');
    });
  });

  describe('*******', function() {
    it('Should return ****', function() {
      assert.deepEqual(capitalize('***'), '***');
    });
  });

  describe('[1, 2, 3]', function() {
    it('Shouldnt crash', function() {
      assert.fail(capitalize([1, 2, 3]));
    });
  });

  describe('Empty string', function() {
    it('Empty string', function() {
      assert.equal(capitalize(''), '');
    });
  });

  describe('null', function() {
    it('null', function() {
      assert.equal(capitalize(null), null);
    });
  });
});
