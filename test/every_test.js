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
      assert.equal(every([true, 1, null, 'yes'], Boolean), false);
    });
  });
});
