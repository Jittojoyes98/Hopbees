import { Mentor, Mentee } from '../../models/index.js'

const registerMentor = async (req, res) => {
  let { name, description } = req.body
  let createUser = await Mentor.create(req.body)
  if (createUser) {
    res.send({
      _id: createUser._id,
      name,
      description,
    })
  }
}

const registerMentee = async (req, res) => {
  let { name, description } = req.body
  let createUser = await Mentee.create(req.body)
  if (createUser) {
    res.send({
      _id: createUser._id,
      name,
      description,
    })
  }
}
export { registerMentor, registerMentee }
