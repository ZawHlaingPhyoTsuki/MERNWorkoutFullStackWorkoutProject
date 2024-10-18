// require('dotenv').config()
import dotenv from "dotenv";
dotenv.config();

import express, { json } from 'express'
import mongoose from 'mongoose'
// import { connect } from 'mongoose'
const { connect } = mongoose
import workoutRoutes from './routes/workouts.js'

// express app
const app = express()

// middleware
app.use(json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    const PORT = process.env.PORT || 4000 
    app.listen(PORT, () => {
      console.log('listening for requests on port', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 