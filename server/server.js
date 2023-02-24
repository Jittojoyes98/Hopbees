import express from 'express'
import dataBaseConnect from './config/db.js'
import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })

const app = express()
dataBaseConnect()

app.use('/api/user', userRoutes)

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server has started')
})
