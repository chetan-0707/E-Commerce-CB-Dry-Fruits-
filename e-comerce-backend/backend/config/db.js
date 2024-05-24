require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://127.0.0.1/ecom',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )

    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.error('MongoDB connection FAIL')
    process.exit(1)
  }
}

module.exports = {connectDB}

// require('dotenv').config();
// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.PG_URI || 'postgresql://username:password@localhost:5432/ecom',
// });

// const connectDB = async () => {
//   try {
//     await pool.connect();
//     console.log('PostgreSQL connection SUCCESS');
//   } catch (error) {
//     console.error('PostgreSQL connection FAIL:', error);
//     process.exit(1);
//   }
// };

// module.exports = { connectDB };