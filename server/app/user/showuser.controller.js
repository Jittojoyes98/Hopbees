import { Mentor, Mentee } from '../../models/index.js'
import { ErrorResponse } from '../../utils/index.js'
import { asyncHandler } from '../../middlewares/index.js'
const showMentor = asyncHandler( async (req, res) => {
  const allMentors = await Mentor.find()
  res.send({ ...allMentors })
})
const showMentee = asyncHandler(async (req, res) => {
  const allMentee = await Mentee.find()
  res.send({ ...allMentee})
})
const showMentorId = asyncHandler(async(req,res,next)=>{
  
  const user = await Mentor.findById(req.params.userid)
  if (!user){
    return next(new ErrorResponse(`User with id ${req.params.userid} not found`,404))
  }
  res.send({
    message:"User was found"
  })
  
})

export { showMentor, showMentee, showMentorId }
