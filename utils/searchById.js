const axios = require('axios')
const boxen = require('boxen')
const Style = require('../utils/style')


module.exports = async (id, developmentMode) => {
  const style = new Style()
  try {
    const errorMessage = style.error(`Invalid ID.\n`)
    
    // checks if id exists and if it's valid, if it doesn't, throw error and return
    if (!id || id === undefined || typeof id !== 'string'){
      throw new Error(boxen(`${errorMessage}\nCheck ID spelling. Also, please make sure you have correctly formatted your entry.\nThe correct format for the save command is as follows: \n\ngoogle-books save --id yourBookIDHere`, style.box))
    }

    // retrieves book from Google Books API using ID, return book
    const book = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)

    return book
  } catch (error) {
    // if in dev mode, return Error obj so it can be printed to console
    if (developmentMode) {
      return error
    }
    // else, checks if error is 503 code
    if (error.message === 'Request failed with status code 503'){
      const error = style.error(`Error.`)
      console.log(boxen(`${error}\n\nThe server is currently unable to process your request.\nThis is likely due to an invalid ID entry. Please try again.`, style.box))
    } else {
      console.error(error.message)
      return error
    }
  }
}