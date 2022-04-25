const mongoose=require("mongoose");
const {Schema}=mongoose;
const BlogSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,  //act as a foreign key 
            ref:'User'                                  // duusre model ki id yha hogi//
            },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
})
const Blog=mongoose.model('Blog',BlogSchema);
Blog.createIndexes()
module.exports=Blog