import pkg from 'chai'
import isDate from '../src/isDate.js'
var { assert, expect, should } = pkg;

describe('isDate', function() {

  describe('x.1. new Date', function() {
    it('Should return true', function() {
      assert.equal(isDate(new Date), true);
    });
  });

  describe('x.2. new Date(December 17, 1995 03:24:00)', function() {
    it('Should return true', function() {
      assert.equal(isDate(new Date('December 17, 1995 03:24:00')), true);
    });
  });

  describe('x.3. Date.now()', function() {
    it('Should return false', function() {
      assert.equal(isDate(Date.now()), false);
    });
  });

  describe('x.4. December 17, 1995 03:24:00', function() {
    it('Should return false', function() {
      assert.equal(isDate('December 17, 1995 03:24:00'), false);
    });
  });

  describe('x.5. Empty input', function() {
    it('Should return false', function() {
      assert.equal(isDate(), false);
    });
  });
});
