
const express = require('express');

const app = express()
const port = process.env.PORT || 5000
const authRoutes = require('./api/routes/auth')


app.use('/api/auth', authRoutes)

app.listen(port, () => console.log(`server started on ${port}`))