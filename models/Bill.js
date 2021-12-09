'use strict'

const mongoose = require('mongoose')

const {Schema} = mongoose

const BillSchema = new Schema({
    number:{
        type: String,
        required: true, 
        unique :true 
    },
    dateBill:{
        type:Date,
        required:true
    },
    typePay:{
        type:Boolean,
        required:true
    },
    details:[{
        type:Schema.Types.ObjectId,
        ref:'detail',
        required:true
    }]
})  

module.exports = mongoose.model('bill', BillSchema)