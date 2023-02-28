import mongoose from 'mongoose'

const dataBaseConnect = async () => {
  try {
    console.log(process.env.MONGOOSE_URI)
    const conn = await mongoose.connect(process.env.MONGOOSE_URI, {
      useNewUrlParser: true,
    })
    console.log('Connected to database')
  } catch (err) {
    console.log(err)
  }
}
export default dataBaseConnect
