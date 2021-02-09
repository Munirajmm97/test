
const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

// mongoose.connect(process.env.DB_CONN,{ useNewUrlParser: true , useUnifiedTopology: true })
// const db = mongoose.connection

// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

app.use(express.json) //to accept json it'll allow us to accept any middleware


const alarmsRouter = require('./routes/alarms')
app.use('/alarms', alarmsRouter)


app.listen(3000, () => console.log('server started'))