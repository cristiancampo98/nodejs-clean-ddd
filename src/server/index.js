const express = require('express')
const morgan = require('morgan')

const userRoute = require('../user/infraestructure/routes')

const app = express()

app.use('/work', userRoute)

app.use(morgan('combined'))
app.use(express.json())

module.exports = app

