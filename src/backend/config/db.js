const mongoose = require("mongoose")

mongoose.set('strictQuery', true)

const dbClose = async ()=> {

  await mongoose.connection.close()
  console.log('Database disconnected')
}

const connectDB = async ()=> {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

  } 
  catch (error) {
    console.log(error)
    process.exit(1)

    }
}

module.exports = { dbClose, connectDB }