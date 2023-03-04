import mongoose from 'mongoose'

const menteeSchema = new mongoose.Schema({
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
  mentors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentor',
    },
  ],
  expertise: [
    {
      type: String,
      required: true,
      maxlength: [20, 'Expertise cannot be more than 20'],
    },
  ],
  role: {
    type: String,
    maxlength: [20, 'Role cannot be more than 20'],
  },
  organisation: {
    type: String,
    maxlength: [20, 'Organisation cannot be more than 20'],
  },
})

const Mentee = mongoose.model('Mentee', menteeSchema)
export { Mentee }
