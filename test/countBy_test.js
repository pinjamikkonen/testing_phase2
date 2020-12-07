import pkg from 'chai'
import countBy from '../src/countBy.js'
var { assert, expect, should } = pkg;

const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'betty', 'active': true },
  { 'user': 'fred', 'active': false }
]

describe('38. countBy', function() {

  describe('38.1. Table of 3 users, 2 of which are active', function() {
    it('Should return true: 2, false: 1', function() {
      assert.equal(countBy(users, value => value.active), {'true': 2, 'false': 1});
    });
  });

  describe('38.2. Array of 3 users none of which have Jazz hands', function() {
    it('Should return 1000', function() {
      assert.equal(countBy(users, value => value.jazzHands), {'undefined': 3});
    });
  });
});
