const searchByQuery = require('../utils/searchByQuery')
const searchResponse = require('../utils/searchResponse')
const boxen = require('boxen')
const Style = require('../utils/style')

module.exports = async args => {
  try {
    const style = new Style()
    const query = args.query || args._1

    // retrieves book list from Google Books API
    const books = await searchByQuery(query)

    // if book list doesn't exist, returns error
    if (books.data.totalItems === 0) {
      throw new Error(boxen(style.error(`No matches were found for your query. Please try a different query.`), style.box))
    }
    // else, returns book list
    return searchResponse(query, books);
  } catch (error) {
    console.error(error)
    return error
  }
};