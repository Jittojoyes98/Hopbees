import express from 'express'
import { registerMentor, loginMentor } from '../app/auth/index.js'
import { showMentor, showMentorId } from '../app/user/index.js'

const mentorRouter = express.Router()

mentorRouter.route('/').get(showMentor)
mentorRouter.route("/register").post(registerMentor)
mentorRouter.route("/login").post(loginMentor)
mentorRouter.route("/:userid").get(showMentorId)

export { mentorRouter }
