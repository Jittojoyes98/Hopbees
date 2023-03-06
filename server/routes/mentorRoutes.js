import express from 'express'
import { registerMentor } from '../app/auth/index.js'
import { showMentor, showMentorId } from '../app/user/index.js'

const mentorRouter = express.Router()

mentorRouter.route('/').get(showMentor).post(registerMentor)
mentorRouter.route("/:userid").get(showMentorId)

export { mentorRouter }
