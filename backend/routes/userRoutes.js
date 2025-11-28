const express = require('express')
const { adminLogin, addProduct } = require('../controllers/userController')
const router = express.Router()
const upload = require('../middlewares/multer.js')

router.post('/admin/login',adminLogin)
router.post('/product/add',upload.single("image"), addProduct)

module.exports = router