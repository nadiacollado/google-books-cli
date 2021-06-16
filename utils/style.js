const chalk = require('chalk')

class Style {
  constructor() {
    this.box = {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'cyan',
    }
    this.error = chalk.bold.redBright
  }
}

module.exports = Style