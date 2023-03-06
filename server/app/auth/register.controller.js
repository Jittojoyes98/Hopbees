import { Mentor, Mentee } from '../../models/index.js'

const registerMentor = async (req, res,next) => {
  
  let { name, description, expertise, role, organisation } = req.body
  try {
    let createUser = await Mentor.create(req.body)
    if (createUser) {
      res.send({
        _id: createUser._id,
        name,
        description,
      })
    }
  } catch (err) {
    next(err)
  }
}

const registerMentee = async (req, res, next) => {
  let { name, description } = req.body
  try {
    let createUser = await Mentee.create(req.body)
    if (createUser) {
      res.send({
        _id: createUser._id,
        name,
        description,
      })
    }
  } catch (err) {
    next(err)
  }
}
export { registerMentor, registerMentee }
