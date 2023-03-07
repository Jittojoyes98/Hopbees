import { asyncHandler } from '../../middlewares/async.js'
import { Mentor, Mentee } from '../../models/index.js'

const registerMentor = asyncHandler( async (req, res,next) => {
  
  let { name, description, expertise, role, organisation } = req.body

  let createUser = await Mentor.create(req.body)
  if (createUser) {
    res.send({
      _id: createUser._id,
      name,
      description,
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
export { registerMentor, registerMentee }
