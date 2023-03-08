import { asyncHandler } from '../../middlewares/async.js'
import { Mentor, Mentee } from '../../models/index.js'
import { ErrorResponse } from '../../utils/index.js'

const registerMentor = asyncHandler( async (req, res,next) => {
  
  let { name, description, expertise, role, organisation } = req.body

  let createUser = await Mentor.create(req.body)
  const token=createUser.getSignJwtToken()
  if (createUser) {
    res.send({
      _id: createUser._id,
      name,
      description,
      token
    })
  }
  
})

const registerMentee = asyncHandler(async (req, res, next) => {
  let { name, description } = req.body
  let createUser = await Mentee.create(req.body)
  if (createUser) {
    res.send({
      _id: createUser._id,
      name,
      description,
    })
  }
})

const loginMentor=asyncHandler(async(req,res,next)=>{
  let { name, email,password } = req.body 
  if(!email || !password){
    return next(new ErrorResponse("Please provide all the details",400))
  }
  const foundUser = await Mentor.findOne({ email }).select('+password')
  if(!foundUser){
    return next(new ErrorResponse("Invalid credentials",401))
  }

  const match=await foundUser.matchPassword(password)
  if(!match){
    return next(new ErrorResponse("Invalid credentials", 401))
  }

  const token = foundUser.getSignJwtToken()
  res.send({
    _id: foundUser._id,
    name,
    token
  })

})
export { registerMentor, registerMentee, loginMentor }
