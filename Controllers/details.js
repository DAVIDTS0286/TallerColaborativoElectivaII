'use strict'

const Detail = require('../models/Detail')

module.exports = {
    index: async(req, res, next)=>{
        try {
            const result = await Detail.find({})
            res.status(200).json({"result":"Success", "data":result})
        } catch (err) {
            return res.status(500).json({"result":"Error", "error": err.message})
        }
    },
    //buscar el detalle de la factura por id
    getDetail: async (req, res, next)=>{
        try {
             const {id} = req.params
             const result = await Detail.find({"_id":id}).populate('product')
            res.status(200).json({"result":"Sucess","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },
    newDetail: async(req, res, next)=>{
        try {
            const detail = new Detail(req.body)
            const result = await detail.save()
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },

    //En las siguientes funciones se envía el id para la busqueda del objeto
    replaceDetail: async(req, res, next)=>{ // Cuando se hacen los cambios a todo el objeto
        try {
            const {id} = req.params
            const detail = req.body
            const result = await Detail.findByIdAndUpdate(id, detail).populate('product')
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },
    updateDetail: async(req, res, next)=>{ // Cuando se hacen los cambios a todo a algunos campos
        try {
            const {id} = req.params
            const detail = req.body
            const result = await Detail.findByIdAndUpdate(id, detail).populate('product')
            res.status(200).json({"result":"Success","data": result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    },

    deleteDetail: async(req, res, next)=>{ 
        try {
            const {id} = req.params
            const result = await Detail.findByIdAndDelete(id).populate('product')
            res.status(200).json({"result":"Success","data":result})
        } catch (err) {
            res.status(500).json({"result":"Error", "error": err.message})
        }
    }
}