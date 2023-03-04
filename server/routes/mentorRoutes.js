import express from 'express'
import { registerMentor } from '../app/auth/index.js'
import { showMentor } from '../app/user/index.js'

const mentorRouter = express.Router()

mentorRouter.route('/').get(showMentor).post(registerMentor)

export { mentorRouter }
