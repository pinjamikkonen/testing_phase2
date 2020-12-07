import pkg from 'chai'
import words from '../src/words.js'
var { assert, expect, should } = pkg;

describe('35. words', function() {

  describe('35.1. Input is a string ("titi kissa on ihana")', function() {
    it('Should return ["titi", "kissa", "on", "ihana"]', function() {
      assert.deepEqual(words('titi kissa on ihana'), ['titi', 'kissa', 'on', 'ihana']);
    });
  });

  describe('35.2. Input is a repeating string ("titi titi titi kissa")', function() {
    it('Should return ["titi", "titi", "titi", "kissa"]', function() {
      assert.deepEqual(words('titi titi titi kissa'), ['titi', 'titi', 'titi', 'kissa']);
    });
  });

  describe('35.3. Input is a string with a symbol ("titi = kissa")', function() {
    it('Should return ["titi", "kissa"]', function() {
      assert.deepEqual(words('titi = kissa'), ['titi', 'kissa']);
    });
  });

  describe('35.4. Input is a string and regular expression ("titi = kissa", /[^, ]+/g)', function() {
    it('Should return ["titi", "=", "kissa"]', function() {
      assert.deepEqual(words('titi = kissa',  /[^, ]+/g), ['titi', '=', 'kissa']);
    });
  });

  describe('35.5. Input is a string of numbers and special characters and regular expression ("= 0 === 11 44 &&&", /[^, ]+/g)', function() {
    it('Should return [= 0 === 11 44 &&&]', function() {
      assert.deepEqual(words('= 0 === 11 44 &&&',  /[^, ]+/g), ['=', '0', '===', '11', '44', '&&&']);
    });
  });

  describe('35.6. Input is a string of special characters without regular expression ("= 0 === 11 44 &&&"', function() {
    it('Should return ["0", "11", "44"]', function() {
      assert.deepEqual(words('= 0 === 11 44 &&&'), ['0', '11', '44']);
    });
  });

  // describe('35.7. Input is a calculation (44 + 44)', function() {
  //   it('Should return an empty array', function() {
  //     assert.deepEqual(words(44 + 44), []);
  //   });
  // });
  //
  // describe('35.8. Input is null', function() {
  //   it('Should return an empty array', function() {
  //     assert.deepEqual(words(null), []);
  //   });
  // });

  describe('35.9. Input is a string, regexp is null ("titi = kissa", null)', function() {
    it('Should return an empty array', function() {
      assert.deepEqual(words('titi = kissa',  null), []);
    });
  });

  describe('35.10. Input is a string, regexp is NaN ("titi = kissa", NaN)', function() {
    it('Should return an empty array', function() {
      assert.deepEqual(words('titi = kissa',  NaN), []);
    });
  });

  // describe('35.11. Empty input', function() {
  //   it('Should return an empty array', function() {
  //     assert.deepEqual(words(), []);
  //   });
  // });
});
