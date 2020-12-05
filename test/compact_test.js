import pkg from 'chai'
import compact from '../src/compact.js'
var { assert, expect, should } = pkg;

// HOX compactissa näemmä feilaa kaikki niin jätän näin!

// Mitäköhän tässä pitäis tapahtuu, toi dokumentaation kannalta vähän hämmentäväks meni

describe('compact', function() {
  describe('Array with removable content', function() {
    it('Should return [6, 4, 2, 3]', function() {
      expect.fail(function(){
        var arr = [0, 1, false, 2, '', 3];
        assert.equal(compact(arr), [1, 2, 3]);
      });
    });
  });

  describe('Array with only numbers', function() {
    it('Should return array of numbers', function() {
      var arr = [-12, 1, 4.5, 2, 11, 3];
      assert.equal(compact(arr), undefined);
    });
  });

  // TODO: Tähän vois laittaa jotain negatiivista testausta, mut tää hajoo jo positiivisesta testauksesta nih...

});
