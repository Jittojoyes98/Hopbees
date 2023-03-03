import express from 'express'
import { registerUser } from '../app/auth/index.js'

const memberRouter = express.Router()

memberRouter.route('/').get().post(registerUser)

export { memberRouter }
