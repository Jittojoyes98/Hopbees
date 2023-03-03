import { User } from '../../models/index.js'

const registerUser = async (req, res) => {
  let { name, description } = req.body
  let createUser = await User.create(req.body)
  if (createUser) {
    res.send({
      _id: createUser._id,
      name,
      description,
    })
  }
}
export { registerUser }
