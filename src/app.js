'use strict'

const express = require('express')
const app = express()
const path = require('path')

require('../drivers/connect-mongo')

//Static files
app.use(express.static(path.join(__dirname,'./')))

//Settings
app.set('port', process.env.PORT || 4000)

//Middleware
app.use(express.json)
app.use(express.urlencoded({extended:true}))

//routes
module.exports = app