module.exports = async args => {
  try {
    const query = args.query || args._1;
    const books = await searchByQuery(query);

    if (!books || books === undefined || books.data.totalItems === 0) {
      throw new Error(`No matches were found for your query. Please try a different query.`)
    }

    return books
  } catch (error) {
    console.log(error)
  }
};