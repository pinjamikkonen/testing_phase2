import assert from 'chai';
//import clamp from '../src/clamp'

//var assert = require('assert');
//var clamp = require('../src/clamp');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

/*describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return 10 idk bruh', function() {
      assert.equal(clamp(10, -5, 5), 5);
    });
  });
});
*/
