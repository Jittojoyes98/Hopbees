import { Mentor, Mentee } from '../../models/index.js'
import { ErrorResponse } from '../../utils/index.js'

const showMentor = async (req, res) => {
  const allMentors = await Mentor.find()
  res.send({ ...allMentors })
}
const showMentee = async (req, res) => {
  const allMentee = await Mentee.find()
  res.send({ ...allMentee})
}
const showMentorId=async(req,res,next)=>{
  try {
    const user = await Mentor.findById(req.params.userid)
    if (!user){
      return next(new ErrorResponse(`User with id ${req.params.userid} not found`,404))
    }
    res.send({
      message:"User was found"
    })
  } catch (err) {
    next(err)
  }
}

export { showMentor, showMentee, showMentorId }
