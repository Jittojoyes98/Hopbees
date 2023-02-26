import mongoose from 'mongoose'

const dataBaseConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOOSE_URI}`)
    console.log('Connected to database')
  } catch (err) {
    console.log(err)
  }
}
export default dataBaseConnect
