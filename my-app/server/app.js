
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./api/routes/auth')
const categoryRoutes = require('./api/routes/category')
const keys = require('./api/config/keys')
const app = express()

const port = process.env.PORT || 5000

mongoose.connect(keys.mongoURI)
  .then(()=> console.log('Mongo DB connected'))
  .catch(error => console.error(error))
//when we initialized connection with db

//підключити файл конструкція поверне функцію яку ми відразу викличемо і туди передамо модуль паспорт



app.use(passport.initialize())//this project will work with passport
var a = null;
process.nextTick(()=> a =require("./api/middleware/passport")); //Circular reference!
//where logic authorisation and routes protection
//returns new function which we ask with object password, other file should export this func

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)

app.listen(port, () => console.log(`server started on ${port}`))