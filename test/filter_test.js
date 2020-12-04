import pkg from 'chai'
import filter from '../src/filter.js'
var { assert, expect, should } = pkg;

const users = [
  { 'user': 'Diego', 'active': true },
  { 'user': 'fred',   'active': false },
  { 'user': 'Bob', 'active': false },
  { 'user': 'Bananaman', 'active': true }
]

describe('filter', function() {
  describe('Filter non-active out', function() {
    it('Should return Diego and Bananaman', function() {
      assert.equal(filter(users, ({ active }) => active), 5);
    });
  });
});
