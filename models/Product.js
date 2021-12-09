'use strict'

const mongoose = require('mongoose')

const {Schema} = mongoose

const ProductSchema = new Schema({
    idProduct:{
        type: String,
        required: true, 
        unique :true 
    },
    description:{
        type: String,
        required:true,
    },
    value:{
        type: String,
        required: true 
    },
    stock:{
        type:Number,
        required:true,
        min:5 //Stock minino
    },
    typeProduct:{
        type: String,
        enum: ['VIVERES', 'LICORES', 'MEDICINAS', 'ASEO'],
        required:true  
    },
    dateExpired:{
        type:Date,
        required:true
    }
})  

module.exports = mongoose.model('product', ProductSchema)