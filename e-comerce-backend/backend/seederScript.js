require('dotenv').config()

const productData = require('./data/products')
const almondData = require('./data/almonds')
const cashewnutsData = require('./data/cashewnuts')
const figData = require('./data/figs')
const pistaData = require('./data/pistas')
const raisinData = require('./data/raisins')

const {connectDB} = require('./config/db')
const Product = require('./models/Product')
const Almonds = require('./models/Almonds')
const Cashewnuts = require('./models/Cashewnuts')
const Figs = require('./models/Figs')
const Pista = require('./models/Pista')
const Raisin = require('./models/Raisin')

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({})
    await Product.insertMany(productData)
    
    await Almonds.deleteMany({})
    await Almonds.insertMany(almondData)

    await Cashewnuts.deleteMany({})
    await Cashewnuts.insertMany(cashewnutsData)

    await Figs.deleteMany({})
    await Figs.insertMany(figData)

    await Pista.deleteMany({})
    await Pista.insertMany(pistaData)

    await Raisin.deleteMany({})
    await Raisin.insertMany(raisinData)

    console.log('Data Import Success')

    process.exit()
  } catch (error) {
    console.error('Error with data import', error)
    process.exit(1)
  }
}

importData()
