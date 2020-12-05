import pkg from 'chai'
import isEmpty from '../src/isEmpty.js'
var { assert, expect, should } = pkg;

let set1 = new Set();
let set2 = new Set();
set2.add(1)

describe('isEmpty', function() {

  describe('null', function() {
    it('Should return true', function() {
      assert.equal(isEmpty(null), true);
    });
  });
