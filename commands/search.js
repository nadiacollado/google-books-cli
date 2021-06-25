const searchByQuery = require('../utils/searchByQuery')

module.exports = async (args, developmentMode) => {
  try {
    const query = args.query || args._1

    // calls search function with query and dev mode
    await searchByQuery(query, developmentMode)

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