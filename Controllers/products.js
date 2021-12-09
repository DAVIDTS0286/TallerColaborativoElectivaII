'use strict'

const Product = require('../models/Product')

module.exports = {
    index: async(req, res, next)=>{
        try {
            const result = await Product.find({})
            res.status(200).json({"result":"Success", "data":result})
        } catch (err) {
            return res.status(500).json({"result":"Error", "error": err.message})
        }
    },

    getProduct: async (req, res, next)=>{
        try {
            const {idProduct} = req.params
             const result = await Product.find({"idProduct":idProduct})
            res.status(200).json({"result":"Sucess","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },
    newProduct: async(req, res, next)=>{
        try {
            const prod = new Product(req.body)
            const result = await prod.save()
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },

    //En las siguientes funciones se envía el id para la busqueda del objeto
    replaceProduct: async(req, res, next)=>{ // Cuando se hacen los cambios a todo el objeto
        try {
            const {id} = req.params
            const prod = req.body
            const result = await Product.findByIdAndUpdate(id, prod)
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },
    updateProduct: async(req, res, next)=>{ // Cuando se hacen los cambios a todo a algunos campos
        try {
            const {id} = req.params
            const prod = req.body
            const result = await Product.findByIdAndUpdate(id, prod)
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },

    deleteProduct: async(req, res, next)=>{ 
        try {
            const {id} = req.params
            const result = await Product.findByIdAndDelete(id)
            res.status(200).json({"result":"Success","data":result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    }
}