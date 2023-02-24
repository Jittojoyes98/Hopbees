import mongoose from 'mongoose'

const dataBaseConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://jitto:${process.env.DATABASE_PASSWORD}@mern-practice.koafg.mongodb.net/?retryWrites=true&w=majority`,
    )
    console.log('Connected to database')
  } catch (err) {
    console.log(err)
  }
}
export default dataBaseConnect
