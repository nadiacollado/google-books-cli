const assert = require('chai').assert
const list = require('../commands/list')
const fs = require('fs')
const boxen = require('boxen')
const Style = require('../utils/style')

const style = new Style()
const data = fs.readFileSync('book-list.txt', 'utf-8')

describe('List', function() {
  it('returns saved book list', async function() {
    assert.equal(list(), data)
  })
})