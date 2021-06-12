const fs = require('fs')

module.exports = async () => {
  await fs.readFile('book-list.txt', (err, data) => {
    if (err) throw err
    else {
      console.log(`\nReading list: \n\n${data}`)
    }
  })
}