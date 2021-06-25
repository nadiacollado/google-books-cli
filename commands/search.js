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

    if (books.data.totalItems === 0) {
      throw new Error(boxen(style.error(`No matches were found for your query. Please try a different query.`), style.box))
    }

    return searchResponse(query, books)
  } catch (error) {
    if (developmentMode) {
      console.error(error)
    } else {
      return
    }
  }
};