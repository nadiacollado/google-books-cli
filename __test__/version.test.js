const boxen = require('boxen')
const Style = require('../utils/style')
const { version } = require('../package.json')
const versionCommand = require('../commands/version')

describe('version.js', () => {
  it('returns current app version', async () => {
    const style = new Style()
    const versionOutput = await versionCommand('version', version)

    expect(versionOutput).toBe(boxen(`v${version}`, style.box))
  })
})
