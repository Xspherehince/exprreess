const Category=require('../models/categoryModel')


exports.helloCategory=(req,res)=>{
    res,send('welcome from the controller')
}

// to post or insert category value
 exports.postCateegory=async(req,res)=>{
     let category=new Category({
       category_name: req.body.category_name
     })
     category=await category.save()

     if(!category){
         return res.status(400).json({error:'so,ething went wrong'})
     }
     res.send(category)
 }
//  to fetch all category
exports.categoryList=async(req,res)=>{
    const category=await Category.find()
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}
// to fetch single category
exports.categoryDetails=async(req,res)=>{
    const category=await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json(
            {error:'something went wrong'})
    }
    res.send(category)
}
// to update category
exports.updateCategory=async(req,res)=>{
    const category=await Category.findByIdAndUpdate(
        req.params.id,
        {
            category_name:req.body.category_name
        },
        {new:true}
    )
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}
// to delete category
exports.deleteCategory=(req,res)=>{
    Category.findbyIdAndRemove(req.params.id).then( (category)=>{
        if(!category){
            return res.status(400).json({error:'category not found'})
        }
        else{
            return res.status(200).json({message:'category deleted'})
        }

    })
    .catch(err=>{
        return res.status(400).json({error:err})
    })
}