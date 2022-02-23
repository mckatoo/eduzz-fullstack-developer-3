import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const connectionString = process.env.DB_URL

if (!connectionString) {
  throw new Error('DB_URL is not defined')
}

const db = mongoose
db.connect(connectionString).then(() => {
  console.log('database connected!')
})

export default db
