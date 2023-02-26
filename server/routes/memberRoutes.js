import express from 'express'

const memberRouter = express.Router()

memberRouter.route('/').get().post()

export { memberRouter }
