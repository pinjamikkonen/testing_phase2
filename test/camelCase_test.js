import pkg from 'chai'
import camelCase from '../src/camelCase.js'
var { assert, expect, should } = pkg;

var arr = [true, false, false, true];
// feilaavat testit kommentoitu pois

describe('22. camelCase', function() {
  describe('22.1. Change string to camelcase ("   zerG iS OVer PoWereD")', function() {
    it('Should return "zergIsOverPowered"', function() {
      assert.equal(camelCase("   zerG iS OVer PoWereD"), "zergIsOverPowered");
    });
  });

  describe('22.2. Change a simple string to camelcase ("   aapeli")', function() {
    it('Should return aapeli', function() {
      assert.equal(camelCase("   aapeli"), "aapeli");
    });
  });

  describe('22.3. Change string with hyphen to camelcase ("tHIS-- -- worKs")', function() {
    it('Should return thisWorks', function() {
      assert.equal(camelCase("tHIS-- -- worKs"), "thisWorks");
    });
  });

  describe('22.4. Try to change a double to camelcase (15.982)', function() {
    it('Should return 15982', function() {
      assert.equal(camelCase(15.982), 15982);
    });
  });

  describe('22.5. Try to change an array to camelcase ([true, false, false, true])', function() {
      it('Should return trueFalseFalseTrue', function() {
        assert.equal(camelCase(arr), "trueFalseFalseTrue");
      });
  });
  // What should this one return?
  describe('22.6. Give undefined parameter to function', function() {
      it('Should return undefined', function() {
        assert.deepEqual(camelCase(undefined), undefined);
      });
  });
});
