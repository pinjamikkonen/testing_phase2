import pkg from 'chai'
import isBuffer from '../src/isBuffer.js'
var { assert, expect, should } = pkg;

describe('every', function() {
  describe('[true, false], Boolean', function() {
    it('Should return true', function() {
      assert.equal(every([true, false], Boolean), true);
    });
  });
