'use strict'

const express = require('express')
const app = express()

require('../drivers/mongo-connect')

// Settings
app.set('port', process.env.PORT || 4000)

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/prod', require('../routes/products.js'))
app.use('/detail', require('../routes/detail.js'))
app.use('/bill', require('../routes/bill.js'))

module.exports = app