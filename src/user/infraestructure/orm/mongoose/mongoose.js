'use strict'

const mongoose = require('mongoose')
const env = require('../../config/env')

mongoose
    .connect(env.database.url, { 
        useNewUrlParser: true 
    })
    .then((db) => console.log("db is connected"))
    .catch((err) => console.error(err))

module.exports = mongoose