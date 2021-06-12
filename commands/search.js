const searchByQuery = require('../utils/searchByQuery')
const searchResponse = require('../utils/searchResponse')
const boxen = require('boxen')
const chalk = require('chalk')

const boxenStyle = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: 'cyan',
}

module.exports = async args => {
  try {
    const query = args.query || args._1

    // retrieves book list from Google Books API
    const books = await searchByQuery(query)

    // if book list doesn't exist, returns error
    if (!books || books === undefined || books.data.totalItems === 0) {
      throw new Error(boxen(chalk.bold.redBright(`No matches were found for your query. Please try a different query.`), boxenStyle))
    }
    // else, returns book list
    return searchResponse(query, books);
  } catch (error) {
    console.log(error)
  }
};