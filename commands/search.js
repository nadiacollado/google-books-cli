const searchByQuery = require('../utils/searchByQuery')
const searchResponse = require('../utils/searchResponse')

module.exports = async args => {
  try {
    const query = args.query || args._1

    // retrieves book list from Google Books API
    const books = await searchByQuery(query)

    // if book list doesn't exist, returns error
    if (!books || books === undefined || books.data.totalItems === 0) {
      throw new Error(`No matches were found for your query. Please try a different query.`)
    }
    // else, returns book list
    return searchResponse(query, books);
  } catch (error) {
    console.log(error)
  }
};