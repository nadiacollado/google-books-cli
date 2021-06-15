const assert = require('chai').assert
const list = require('../commands/list')
const fs = require('fs')
const data = fs.readFileSync('book-list.txt', 'utf-8')

describe('List', function() {
  it('returns saved book list', function() {
    assert.equal(list(), data)
  })
})