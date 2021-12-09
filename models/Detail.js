'use strict'

const mongoose = require('mongoose')

const {Schema} = mongoose

const DetailSchema = new Schema({
    cant:{
        type: Number,
        required: true, 
        unique :true 
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'product',
        required:true,
    }
})  

module.exports = mongoose.model('detail', DetailSchema)