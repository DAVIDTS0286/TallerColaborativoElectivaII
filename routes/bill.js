'use strict'

const {Router} = require("express") 

const router = new Router()

const{
    index,
    getBill,
    newBill,
    replaceBill,
    updateBill,
    deleteBill,
    getDetails
} = require('../Controllers/bill')

router.get('/',index)
router.post('/',newBill)
router.get('/:number', getBill)
router.put('/:id', replaceBill)
router.patch('/:id', updateBill)
router.delete('/:id', deleteBill)
router.get('/:id/getDetails', getDetails)

module.exports = router