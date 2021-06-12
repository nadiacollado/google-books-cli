const menus = {
  main: `
    google-books [command] <options>

    version ............ show current package version
    help ............... show help menu,
    search ............. search Google Books API, use --query flag followed by search term
    list ............... show reading list
    save ............... save book to reading list, use --id flag followed by book ID`,
  

  version: `
    google-books version <options>

    --version ..... the package version`,
  
  search: `
    google-books search <options>

    --query ..... followed by search term`,
    
  save: `
    google-books save <options>

    --id ..... followed by book ID`,
}

module.exports = args => {
  const subCommand = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCommand] || menus.main)
}