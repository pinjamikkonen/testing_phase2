import pkg from 'chai'
import difference from '../src/difference.js'
var { assert, expect, should } = pkg;


describe('difference', function() {
  describe('Positive values', function() {
    it('Should return [1]', function() {
      expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
    });
  });

  describe('Positive values', function() {
    it('Should return [1, 4]', function() {
      expect(difference([2, 1, 4, 3], [2, 3])).to.deep.equal([1, 4]);
    });
  });

  describe('Positive values', function() {
    it('Should return empty array', function() {
      expect(difference([2, 1], [2, 1])).to.deep.equal([]);
    });
  });

  describe('Positive values', function() {
    it('Should return empty array', function() {
      expect(difference('bitch')).to.deep.equal([]);
    });
  });
});
