import mongoose from 'mongoose'
import slugify from 'slugify'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
  slug: {
    type: String
  },
  email:{
    type:String,
    unique: true,
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
  designation: {
    type: String,
    required: true,
    maxlength: [20, 'Expertise cannot be more than 20'],
  },
  organisation: {
    type: String,
    required: true,
    maxlength: [20, 'Expertise cannot be more than 20'],
  },
  role:{
    type:String,
    required:true,
    enum:['mentor','mentee'],
    default:'mentee'
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  }
})

mentorSchema.pre("save",function(next){
  this.slug=slugify(this.name,{lower:true})
  next()
})
mentorSchema.pre("save", async function (next){
  const salt = await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt)
  next()
})
mentorSchema.methods.getSignJwtToken=function(){
  return (
    jwt.sign({id:this._id},process.env.JWT_SECRET,{
      expiresIn:process.env.JWT_EXPIRE
    })
  )
}
mentorSchema.methods.matchPassword=async function(enteredPassword){
  return(
    await bcrypt.compare(enteredPassword,this.password)
  )
}

const Mentor = mongoose.model('Mentor', mentorSchema)
export { Mentor }
