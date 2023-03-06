import mongoose from 'mongoose'

const mentorSchema = new mongoose.Schema({
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
  email:{
    type:String,
    required: [true, 'Please add email addresss'],
    match:[
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      "Please add a valid email"
    ]
  },
  review: {
    type: String,
    maxlength: [500, 'Review cannot be more than 500'],
  },
  expertise: [
    {
      type: String,
      required: true,
      maxlength: [20, 'Expertise cannot be more than 20'],
    },
  ],
  role: {
    type: String,
    required: true,
    maxlength: [20, 'Expertise cannot be more than 20'],
  },
  organisation: {
    type: String,
    required: true,
    maxlength: [20, 'Expertise cannot be more than 20'],
  },
})

const Mentor = mongoose.model('Mentor', mentorSchema)
export { Mentor }
