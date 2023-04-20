
const books = require('../model/book.js')
const users = require('../model/user.js')


const seedDB = async (bookData, userData) => {
  await books.collection.drop({})
  await books.insertMany(bookData)
  await users.collection.drop({})
  await users.insertMany(userData)
}

module.exports = seedDB
