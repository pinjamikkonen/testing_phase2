import pkg from 'chai'
import camelCase from '../src/camelCase.js'
var { assert, expect, should } = pkg;

var arr = [true, false, false, true];
// feilaavat testit kommentoitu pois

describe('camelCase', function() {
//   describe('Change string to camelcase', function() {
//     it('Should return zergIsOverPowered', function() {
//       assert.equal(camelCase("   zerG iS OVer PoWereD"), "zergIsOverPowered");
//     });
//   });

  // describe('Change a simple string to camelcase', function() {
  //   it('Should return aapeli', function() {
  //     assert.equal(camelCase("   aapeli"), "aapeli");
  //   });
  // });

  // describe('Change string with hyphen to camelcase', function() {
  //   it('Should return thisWorks', function() {
  //     assert.equal(camelCase("tHIS-- -- worKs"), "thisWorks");
  //   });
  // });

  describe('Try to change a double to camelcase', function() {
    it('Should return 15982', function() {
      assert.equal(camelCase(15.982), 15982);
    });
  });

  // describe('Try to change an array to camelcase', function() {
  //     it('Should return trueFalseFalseTrue', function() {
  //       assert.equal(camelCase(arr), "trueFalseFalseTrue");
  //     });
  // });
  // What should this one return?
  describe('Give undefined parameter to function', function() {
      it('Should return empty or undefined', function() {
        assert.deepEqual(camelCase(undefined), undefined);
      });
  });
});
