'use strict'

const mongoose = require('mongoose')

//Conexion con mongodb atlas
const uri='mongodb+srv://ginaPerez:123Sistemas@cluster0.jv1zs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(uri)
    .then(()=>console.log('Connect DB success'))
    .catch((err)=>console.log(`Error to connect ${err}`))

 module.exports = mongoose