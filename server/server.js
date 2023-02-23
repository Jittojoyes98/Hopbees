import express from 'express'
import dataBaseConnect from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
dataBaseConnect()

app.get('/', (req, res) => {
  res.send('HEYY THERE')
})

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server has started')
})
