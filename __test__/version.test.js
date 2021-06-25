const versionCommand = require('../commands/version')
const { version } = require('../package.json')
const boxen = require('boxen')
const Style = require('../utils/style')
const style = new Style()

describe('version.js', () => {
  it('returns current app version', async () => {
    const versionOutput = await versionCommand('version', version)
    console.log(versionOutput, 'output')
    expect(versionOutput).toBe(boxen(`v${version}`, style.box))
  })
})
