const minimist = require('minimist')
const books = require('../utils/searchByQuery')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  
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
      require('../commands/search')(args, books)
      break
    case 'save':
        require('../commands/save')(args)
        break
    default:
      console.error(`"${command}" is not a valid command.`)
      break
  }
}