import pkg from 'chai'
import filter from '../src/filter.js'
var { assert, expect, should } = pkg;

const users = [
  { 'user': 'Diego', 'active': true },
  { 'user': 'fred',   'active': false },
  { 'user': 'Bob', 'active': false },
  { 'user': 'Bananaman', 'active': true }
]

describe('9. filter', function() {
  describe('9.1. Filter with boolean value (users, ({ active }) => active)', function() {
    it('Should return Diego and Bananaman', function() {
      assert.deepEqual(filter(users, ({ active }) => active), [
        { 'user': 'Diego', 'active': true },
        { 'user': 'Bananaman', 'active': true }
      ]);
    });
  });

  describe('9.2. Filter with non-boolean attribute (users, ({ user }) => "Diego")', function() {
    it('Should return Diego', function() {
      assert.deepEqual(filter(users, ({ user }) => 'Diego'), [
        { 'user': 'Diego', 'active': true }
      ]);
    });
  });

  describe('9.3. Filter with attribute that doesnt exist (users, ({ powerlevel }) => 9001), [[]])', function() {
    it('Should return empty list', function() {
      assert.deepEqual(filter(users, ({ powerlevel }) => 9001), [[]]);
    });
  });

  describe('9.4. Filter a null-value (null, ({ active }) => active), [[]])', function() {
    it('Should return empty list', function() {
      assert.deepEqual(filter(null, ({ active }) => active), [[]]);
    });
  });
});
