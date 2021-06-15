const assert = require('chai').assert
const appVersion = require('../commands/version')
const { version } = require('../package.json')
const boxen = require('boxen')
const Style = require('../utils/style')
const style = new Style()

describe('Version', function() {
  it('returns current app version', function() {
    assert.equal(appVersion(), boxen(`v${version}`, style.box))
  })
})