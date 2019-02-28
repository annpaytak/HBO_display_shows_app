
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express()

const port = process.env.PORT || 5000
const authRoutes = require('./api/routes/auth')
const categoryRoutes = require('./api/routes/category')
const keys = require('./api/config/keys')

mongoose.connect(keys.mongoURI)
  .then(()=> console.log('Mongo DB connected'))
  .catch(error => console.error(error))

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)

app.listen(port, () => console.log(`server started on ${port}`))