import pkg from 'chai'
import words from '../src/words.js'
var { assert, expect, should } = pkg;

describe('words', function() {

  describe('x.1. titi kissa on ihana', function() {
    it('Should return [titi, kissa, on, ihana]', function() {
      assert.deepEqual(words('titi kissa on ihana'), ['titi', 'kissa', 'on', 'ihana']);
    });
  });

  describe('x.2. titi titi titi kissa', function() {
    it('Should return [titi, titi, titi, kissa]', function() {
      assert.deepEqual(words('titi titi titi kissa'), ['titi', 'titi', 'titi', 'kissa']);
    });
  });

  describe('x.3. titi = kissa', function() {
    it('Should return [titi, kissa]', function() {
      assert.deepEqual(words('titi = kissa'), ['titi', 'kissa']);
    });
  });

  describe('x.4. titi = kissa, symbols', function() {
    it('Should return [titi, =, kissa]', function() {
      assert.deepEqual(words('titi = kissa',  /[^, ]+/g), ['titi', '=', 'kissa']);
    });
  });

  describe('x.5. = 0 === 11 44 &&&, symbols', function() {
    it('Should return [= 0 === 11 44 &&&]', function() {
      assert.deepEqual(words('= 0 === 11 44 &&&',  /[^, ]+/g), ['=', '0', '===', '11', '44', '&&&']);
    });
  });

  describe('x.6. = 0 === 11 44 &&&, no symbols', function() {
    it('Should return [0, 11, 44]', function() {
      assert.deepEqual(words('= 0 === 11 44 &&&'), ['0', '11', '44']);
    });
  });

  // describe('x.7. 44 + 44, numbers', function() {
  //   it('Should recover from error', function() {
  //     assert.deepEqual(words(44+44), []);
  //   });
  // });

  // describe('x.8. null', function() {
  //   it('Should recover from error', function() {
  //     assert.deepEqual(words(null), []);
  //   });
  // });

  describe('x.9. x.4 titi = kissa, null pattern', function() {
    it('Should return []', function() {
      assert.deepEqual(words('titi = kissa',  null), []);
    });
  });

  describe('x.10. x.4 titi = kissa, NaN pattern', function() {
    it('Should return []', function() {
      assert.deepEqual(words('titi = kissa',  NaN), []);
    });
  });

  describe('x.11. Empty input', function() {
    it('Should recover from error', function() {
      assert.deepEqual(words(), []);
    });
  });
});
