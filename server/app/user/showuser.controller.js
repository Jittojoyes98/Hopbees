import { Mentor, Mentee } from '../../models/index.js'

const showMentor = async (req, res) => {
  const Mentor = await Mentor.find()
  res.send({ ...Mentor })
}
const showMentee = async (req, res) => {
  const Mentee = await Mentee.find()
  res.send({ ...Mentee })
}

export { showMentor, showMentee }
