'use strict'

const {Router} = require("express") 

const router = new Router()

const{
    index,
    getProduct,
    newProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} = require('../Controllers/products')

router.get('/',index)
router.post('/',newProduct)
router.get('/:idProduct', getProduct)
router.put('/:id', replaceProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router