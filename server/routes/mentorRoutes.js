import express from 'express'

const mentorRouter = express.Router()

mentorRouter.route('/').get().post()

export { mentorRouter }
