import express from 'express'
import dataBaseConnect from './config/db.js'
import dotenv from 'dotenv'
import { mentorRouter, memberRouter } from './routes/index.js'
const dot = dotenv.config({ path: 'server/config/config.env' })

const app = express()
dataBaseConnect()

app.use('/api/members', memberRouter)
app.use('api/mentor', mentorRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server has started')
})
