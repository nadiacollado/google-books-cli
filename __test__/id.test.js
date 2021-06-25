const mockAxios = require('axios')
const idTestData = require('../__fixtures__/queryIdData')
const searchById = require('../utils/searchById')
const boxen = require('boxen')
const Style = require('../utils/style')


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

  it('throws an error if book ID is undefined', async () => {
    const style = new Style()
    const errorMessage = style.error(`Invalid ID.\n`)
    const idError = boxen(`${errorMessage}\nCheck ID spelling. Also, please make sure you have correctly formatted your entry.\nThe correct format for the save command is as follows: \n\ngoogle-books save --id idNumber`, style.box)

    const error = await searchById()
    
    expect(error.message).toBe(idError)
    expect(error.name).toBe('Error')
  })

  it('throws an error if book ID is not a string', async () => {
    const style = new Style()
    const errorMessage = style.error(`Invalid ID.\n`)
    const idError = boxen(`${errorMessage}\nCheck ID spelling. Also, please make sure you have correctly formatted your entry.\nThe correct format for the save command is as follows: \n\ngoogle-books save --id idNumber`, style.box)

    const error = await searchById(55)

    expect(error.message).toBe(idError)
    expect(error.name).toBe('Error')
  })
})
