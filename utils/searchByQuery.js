const axios = require('axios')
const boxen = require('boxen')
const Style = require('../utils/style')
const searchResponse = require('../utils/searchResponse')


module.exports = async (query, developmentMode) => {
  try {
    const style = new Style()
    const errorMessage = style.error(`Your query did not yield any results.\n`)

    // checks if query exists, if it doesn't, throw error
    if (query === undefined || !query || query === true && query !== 'true') {

      throw new Error((boxen(`
      ${errorMessage}
      Please make sure you have correctly formatted your search. The correct format for the search command is as follows: \n
      google-books search --query "search query"
      `, style.box)))
    } else {

      // retrieves book list from Google Books API using query
      const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&startIndex=0&maxResults=5&projection=lite`
      )

      // checks if books returned anything, if not, throws error
      if (books.data.totalItems === 0) {
        throw new Error(boxen(style.error(`No matches were found for your query. Please try a different query.`), style.box))
      } else {
        // calls response func and returns results from Google API
        return searchResponse(query, books)
      }
    }
  } catch (error) {
    // checks if dev mode is true, if so, returns the Error obj to search command
    if (developmentMode) {
      return error
    }
    // else, prints custom Error message for user
    console.error(error.message)
  }
}