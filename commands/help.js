const menus = {
  main: `
    google-books [command] <options>

    version ............ show current package version
    help ............... show help menu`,
  

  version: `
    google-books version <options>

    --version ..... the package version`,
}

module.exports = args => {
  const subCommand = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCommand] || menus.main)
}