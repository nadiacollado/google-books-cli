const { version } = require('../package.json')
const boxen = require('boxen')

const boxenStyle = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: 'cyan',
}

module.exports = () => {
  console.log(boxen(`v${version}`, boxenStyle))
}