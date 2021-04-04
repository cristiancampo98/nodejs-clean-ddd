'use strict'

const constants = require('./constants')

module.exports = ( () => {
    const env = {
        database: {
            dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
            url: process.env.DATABASE_URI || 'mongodb://localhost/practice01'
        }
    }
    return env
})()