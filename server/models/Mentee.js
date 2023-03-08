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
  slug:{
    type:String
  },
  email: {
    type: String,
    unique:true,
    required: [true, 'Please add email addresss'],
    match: [
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      "Please add a valid email"
    ]
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
  designation: {
    type: String,
    maxlength: [20, 'Role cannot be more than 20'],
  },
  organisation: {
    type: String,
    maxlength: [20, 'Organisation cannot be more than 20'],
  },
  role: {
    type: String,
    required: true,
    enum: ['mentor', 'mentee'],
    default: 'mentee'
  },
  password:{
    type:String,
    required:[true,"Please add a password"],
    minlength:6,
    select:false,
  }
})
menteeSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})
menteeSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})
menteeSchema.methods.getSignJwtToken = function () {
  return (
    jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    })
  )
}

const Mentee = mongoose.model('Mentee', menteeSchema)
export { Mentee }
