'use strict'

const Bill = require('../models/Bill')

module.exports = {
    index: async(req, res, next)=>{
        try {
            const result = await Bill.find({})
            res.status(200).json({"result":"Success", "data":result})
        } catch (err) {
            return res.status(500).json({"result":"Error", "error": err.message})
        }
    },
    //buscar el detalle de la factura por numero
    getBill: async (req, res, next)=>{
        try {
             const {number} = req.params
             const result = await Bill.find({"number":number}).populate('product')
            res.status(200).json({"result":"Sucess","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },
    newBill: async(req, res, next)=>{
        try {
            const bill = new Bill(req.body)
            const result = await bill.save()
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },

    //En las siguientes funciones se envía el id para la busqueda del objeto
    replaceBill: async(req, res, next)=>{ // Cuando se hacen los cambios a todo el objeto
        try {
            const {id} = req.params
            const bill = req.body
            const result = await Bill.findByIdAndUpdate(id, bill)
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },
    updateBill: async(req, res, next)=>{ // Cuando se hacen los cambios a todo a algunos campos
        try {
            const {id} = req.params
            const bill = req.body
            const result = await Bill.findByIdAndUpdate(id, bill)
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },

    deleteBill: async(req, res, next)=>{ 
        try {
            const {id} = req.params
            const result = await Bill.findByIdAndDelete(id)
            res.status(200).json({"result":"Success","data":result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    }, 
    getDetails: async(req, res, next) =>{
        try {
            const {id} = req.params //id de la factura
            const result = await Bill.findById(id).populate('details')
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    }
}