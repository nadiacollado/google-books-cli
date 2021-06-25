const minimist = require('minimist')
const boxen = require('boxen')
const Style = require('../utils/style')
const books = require('../utils/searchByQuery')

module.exports = () => {
  const style = new Style()
  const args = minimist(process.argv.slice(2))

  // For developers, toggle this to true to inspect errors via the Error object
  let developmentMode = false
  
  let command = args._[0] || 'help'

  if (args.help || args.h) {
    command = 'help'
  }

  if (args.version || args.v) {
    command = 'version'
  }

  switch(command){
    case 'version':
      require('../commands/version')(args)
      break
    case 'help':
      require('../commands/help')(args)
      break
    case 'search':
      require('../commands/search')(args, developmentMode, books)
      break
    case 'save':
      require('../commands/save')(args, developmentMode)
      break
    case 'list':
      require('../commands/list')(args, books)
      break
    default:
      const errorMessage = style.error(`"${command}" is not a valid command. Please submit a valid command.`)
      console.error(boxen(`\n ${errorMessage} \n \n For command options, please use the following help command: google-books help \n`, style.box))
      break
  }
}