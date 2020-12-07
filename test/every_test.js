import pkg from 'chai'
import every from '../src/every.js'
var { assert, expect, should } = pkg;

describe('26. every', function() {
  // describe('26.1 Boolean values, boolean type ([true, false], Boolean)', function() {
  //   it('Should return true', function() {
  //     assert.equal(every([true, false], Boolean), true);
  //   });
  // });

  describe('26.2. Various values, boolean type ([true, 1, null, "yes"], Boolean)', function() {
    it('Should return false', function() {
      assert.equal(every([true, 14, null, 'yes'], Boolean), false);
    });
  });

  describe('26.3. A string, string type (["test"], String)', function() {
    it('Should return true', function() {
      assert.equal(every(['test'], String), true);
    });
  });

  describe('26.4. Two strings, string type (["word", "another"], String)', function() {
    it('Should return true', function() {
      assert.equal(every(['word', 'another'], String), true);
    });
  });

  // describe('26.5. Various inputs, string type (["sana", "toinen", 15, true, null], String)', function() {
  //   it('Should return false', function() {
  //     assert.equal(every(['sana', 'toinen', 15, true, null], String), false);
  //   });
  // });

  describe('26.6. Integers, number type ([2, 1, 55], Number)', function() {
    it('Should return true', function() {
      assert.equal(every([2, 1, 55], Number), true);
    });
  });

  describe('26.7. Various inputs, number type ([2, 1, 55, true], Number)', function() {
    it('Should return true', function() {
      assert.equal(every([2, 1, 55, true], Number), true);
    });
  });

  // describe('26.8. Various inputs, null type ([2, 1, 55, true], null)', function() {
  //   it('Should return false', function() {
  //     assert.isOk(every([2, 1, 55, true], null));
  //   });
  // });
  //
  // describe('26.9. Various inputs, missing type ([2, 1, 55, true])', function() {
  //   it('Should recover', function() {
  //     assert.isOk(every([2, 1, 55, true]));
  //   });
  // });
});
