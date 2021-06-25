const boxen = require('boxen')
const Style = require('../utils/style')

module.exports = (args, version) => {
  const style = new Style()
  console.log(boxen(`v${version}`, style.box))
  return boxen(`v${version}`, style.box)
}