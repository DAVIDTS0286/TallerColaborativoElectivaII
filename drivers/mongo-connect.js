'use strict'

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/autoService'

mongoose.connect(url)
.then(()=>console.log('Connect DB success'))
.catch((err)=>console.log(`Error to connect ${err}`))

module.exports = mongoose
