const searchByQuery = require('../utils/searchByQuery')
const searchResponse = require('../utils/searchResponse')
// const boxen = require('boxen')
const Style = require('../utils/style')

module.exports = async (args, developmentMode) => {
  const style = new Style()

  try {
    const query = args.query || args._1

    // calls search function with query and dev mode
    await searchByQuery(query, developmentMode)
    
    // if (books.data.totalItems === 0) {
    //     throw new Error(boxen(style.error(`No matches were found for your query. Please try a different query.`), style.box))
    // }

  } catch (error) {
    // checks is dev mode is true, prints Error if so
    if (developmentMode) {
      console.error(error)
    } else {
      // else, returns without Error obj
      return
    }
  }
}