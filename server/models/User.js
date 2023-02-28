import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please add name'],
    unique: true,
    trim: true,
    maxlength: [30, 'Name cannot be more than 30 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add description'],
    maxlength: [500, 'Description cannot be more than 500'],
  },
})

const User = mongoose.model('User', userSchema)
export { User }
