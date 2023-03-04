import express from 'express'
import { registerMentee } from '../app/auth/index.js'
import { showMentee } from '../app/user/index.js'

const memberRouter = express.Router()

memberRouter.route('/').get(showMentee).post(registerMentee)

export { memberRouter }
