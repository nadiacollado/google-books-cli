const mockAxios = require('axios')
const idTestData = require('../__fixtures__/queryIdData')
const searchById = require('../utils/searchById')
const boxen = require('boxen')
const Style = require('../utils/style')
const style = new Style()


describe('searchById.js', () => {
  it('calls Google Books using an ID and returns a book', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(idTestData)
    )
    const id = 'Gz8t2MttEQUC'
    const book = await searchById(id)
   
    expect(book).toEqual(idTestData)
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://www.googleapis.com/books/v1/volumes/Gz8t2MttEQUC'
    )
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })
})
