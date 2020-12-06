import pkg from 'chai'
import difference from '../src/difference.js'
var { assert, expect, should } = pkg;


describe('6. difference', function() {
  describe('6.1. Positive values ([2, 1], [2, 3]', function() {
    it('Should return [1]', function() {
      expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
    });
  });

  describe('6.2. Positive values ([2, 1, 4, 3], [2, 3])', function() {
    it('Should return [1, 4]', function() {
      expect(difference([2, 1, 4, 3], [2, 3])).to.deep.equal([1, 4]);
    });
  });

  describe('6.3. Positive values ([2, 1], [2, 1])', function() {
    it('Should return empty array', function() {
      expect(difference([2, 1], [2, 1])).to.deep.equal([]);
    });
  });

  describe('6.4. String is input ("test")', function() {
    it('Should return empty array', function() {
      expect(difference('test')).to.deep.equal([]);
    });
  });
});
