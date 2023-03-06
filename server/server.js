import express from 'express'
import dataBaseConnect from './config/db.js'
import dotenv from 'dotenv'
import { mentorRouter, memberRouter } from './routes/index.js'
import { errorHandler } from './middlewares/index.js'
const dot = dotenv.config({ path: 'server/config/config.env' })

const app = express()
dataBaseConnect()
app.use(express.json())
app.use('/api/members', memberRouter)
app.use('/api/mentor', mentorRouter)
app.use(errorHandler)

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server has started')
})
