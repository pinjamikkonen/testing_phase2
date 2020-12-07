import pkg from 'chai'
import upperFirst from '../src/ceil.js'
var { assert, expect, should } = pkg;

describe('41. upperFirst', function() {

  describe('41.1. NARuto', function() {
    it('Should return NARuto', function() {
      assert.equal(upperFirst('NARuto'), 'NARuto');
    });
  });

  describe('41.2. Input is \' power blow\' ', function() {
    it('Should return \' power blow\'', function() {
      assert.equal(upperFirst(' power blow'), ' power blow');
    });
  });

  describe('41.3. Undefined', function() {
    it('Should return undefined', function() {
      assert.equal(upperFirst(undefined), undefined);
    });
  });
});
