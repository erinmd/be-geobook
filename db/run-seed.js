const bookData = require('./liveData/liveBookDataSeed')
const userData = require('./liveData/liveUserDataSeed')

require('dotenv').config({
  path: `.env`
});

const seedDB = require('./seeds.js')
const mongoose =  require('mongoose')


const runSeed = async () => {
    await mongoose.connect(process.env.DATABASE_URL)
    await seedDB(bookData,userData)
    await mongoose.connection.close()
}

runSeed()