const express=require('express');
const router=express.Router();
const fetch=require('../middleware/fetch');
const {body,validationResult}=require('express-validator');
const Blog=require('../models/Blog');
router.get('/fetchtravel',fetch,async(req,res)=>{
    const ghuum=await Blog.find({user:req.user.id});
    res.json(ghuum);
 })
 router.post('/addtravels',fetch,[
    body('image','enter an image').isLength({min:3}),
body('description','enter a valid description').isLength({min:5}),
],async (req,res)=>{
    try{
    const {description,image}=req.body;
    const errors=validationResult(req);
    // IF ERROR THEN SEND BAD REQUEST AND THEN RETURN//
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const blog=new Blog({
        image,
        description,
        user:req.user.id
            })
            const saved=await blog.save();
        res.json(saved);
        }
        catch(e){
            res.status(500).send("internal server error");
            }
})
router.put('/updatetravel/:id',fetch,async(req,res)=>{
    const {image,description}=req.body;
    const newTask={};
    if(image)
        {
            newTask.image=image;
        }
    if(description)
    {
            newTask.description=description
    }
    
    let note=await Blog.findById(req.params.id);
    if(!note)
    {
        return res.status(404).send("Not found")
    }
    //jo loged in hai vo kisi aur ki id ko access krne ki koshish kr rha hai//
    if(note.user.toString()!==req.user.id)  //user field me jo id h usko phle string me bdlenge aur compare krenge user ki id se jo logged in hai//
    //the above statement checks that ki jo activity hm update krna chahte hai vo usi user ki hai ki nhi//
    {
        return res.status(401).send("Not Allowed")
    }
    note=await Blog.findByIdAndUpdate(req.params.id,{$set:newTask},{new:true})
    res.json(note);
    
    })

    router.delete('/delete:id',fetch,async(req,res)=>{
        const id=req.params.id;
        let note=await Blog.findById(id);
        if(!note)
        {
            res.status(404).json({message:"not found"});
        }
        if(note.user.toString()!==req.user.id)
{
    return res.status(401).send("Not Allowed")
}
note=await Blog.findByIdAndDelete(id);
res.status(200).json({message:"deleted successfully"});
    })
    module.exports=router;
