const searchByQuery = require('../utils/searchByQuery')
const searchResponse = require('../utils/searchResponse')
const boxen = require('boxen')
const Style = require('../utils/style')

module.exports = async (args, developmentMode) => {
  const style = new Style()

  try {
    const query = args.query || args._1

    // retrieves book list from Google Books API
    const books = await searchByQuery(query, developmentMode)

    return searchResponse(query, books)
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