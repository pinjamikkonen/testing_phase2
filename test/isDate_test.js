import pkg from 'chai'
import isDate from '../src/isDate.js'
var { assert, expect, should } = pkg;

describe('30. isDate', function() {

  describe('30.1. Input is a date (new Date)', function() {
    it('Should return true', function() {
      assert.equal(isDate(new Date), true);
    });
  });

  describe('30.2. Input is a date (new Date(December 17, 1995 03:24:00))', function() {
    it('Should return true', function() {
      assert.equal(isDate(new Date('December 17, 1995 03:24:00')), true);
    });
  });

  describe('30.3. Input is a date function (Date.now())', function() {
    it('Should return false', function() {
      assert.equal(isDate(Date.now()), false);
    });
  });

  describe('30.4. Input is a date string ("December 17, 1995 03:24:00")', function() {
    it('Should return false', function() {
      assert.equal(isDate('December 17, 1995 03:24:00'), false);
    });
  });

  describe('30.5. Empty input', function() {
    it('Should return false', function() {
      assert.equal(isDate(), false);
    });
  });
});
