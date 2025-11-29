const express = require('express')
const { adminLogin, addProduct, fetchProduct } = require('../controllers/userController')
const router = express.Router()
const upload = require('../middlewares/multer.js')

router.post('/admin/login',adminLogin)
router.post('/product/add',upload.single("image"), addProduct)
router.get('/shop', fetchProduct)
module.exports = router