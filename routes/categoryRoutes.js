const express=require('express')
const router=express.Router()

const { helloCategory,  postCateegory, categoryList, categoryDetails, updateCategory, deleteCategory } = require('../controllers/categoryController')

router.get('/welcome',helloCategory)
router.post('/postcategory',postCateegory)
router.get('/categoryList',categoryList)
router.get('/categorydetails/:id',categoryDetails)
router.put('/updatecategory/:id',updateCategory)
router.delete('/deletecategory/:id',deleteCategory)



module.exports=router