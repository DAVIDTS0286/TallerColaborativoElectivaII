'use strict'

const {Router} = require("express") 

const router = new Router()

const{
    index,
    getDetail,
    newDetail,
    replaceDetail,
    updateDetail,
    deleteDetail
} = require('../Controllers/details')

router.get('/',index)
router.post('/',newDetail)
router.get('/:id', getDetail)
router.put('/:id', replaceDetail)
router.patch('/:id', updateDetail)
router.delete('/:id', deleteDetail)

module.exports = router