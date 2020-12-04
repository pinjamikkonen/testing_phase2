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
      assert.deepEqual(filter(users, ({ active }) => active), [
        { 'user': 'Diego', 'active': true },
        { 'user': 'Bananaman', 'active': true }
      ]);
    });
  });

  // describe('Filter with non-boolean attribute', function() {
  //   it('Should return Diego', function() {
  //     assert.deepEqual(filter(users, ({ user }) => "Diego"), [
  //       { 'user': 'Diego', 'active': true }
  //     ]);
  //   });
  // });

  // describe('Filter with attribute that doesnt exist', function() {
  //   it('Should return empty list', function() {
  //     assert.deepEqual(filter(users, ({ powerlevel }) => 9001), [[]]);
  //   });
  // });

  describe('Filter a null-value', function() {
    it('Should return empty list', function() {
      assert.deepEqual(filter(null, ({ active }) => active), [[]]);
    });
  });
});
