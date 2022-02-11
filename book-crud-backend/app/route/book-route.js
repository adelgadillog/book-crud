const express = require('express')

const controller = require('../controller/book-controller')

const router = express.Router()

const path = 'book'

router.get(
    `/${path}`,controller.getData
    
)

router.post(
    `/${path}`,controller.postData
)


module.exports = router