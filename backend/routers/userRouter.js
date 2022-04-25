const express=require('express')
const router=express.Router();
const User=require('../models/User');
const bcrypt=require('bcryptjs');
const {body,validationResult}=require('express-validator');
const jwt=require('jsonwebtoken');

router.post('/createuser',[
    body('name','enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','enter password of minimum length').isLength({min:5}),
    ],async (req,res)=>{
        let success=false;
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({success,errors:errors.array()})
        }
        try{
            const{name,email,password}=req.body;
            const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors:errors.array()})
    }
            let user=await User.findOne({email})
            if(user)
            {
                res.status(401).json({message:"Email already exist"})
            }
            const salt=await bcrypt.genSalt(10);
const secured=await bcrypt.hash(password,salt);
user=User.create({
    name,
    email,
    password:secured
})
const dat={
    user:{
        id:user.id
    }
}
const token=jwt.sign(dat,'shhhhhh');
res.json({token});
console.log(token);


        }catch(e)
        {
console.log(e.msg);
        }
    })
    router.post('/login',[
      
        body('email','enter a valid email').isEmail(),
        body('password','enter password of minimum length').isLength({min:5}),
        ],async (req,res)=>{
            let success=false;
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({success,errors:errors.array()})
            }
            try{
                const {email,password}=req.body;
                let user=await User.findOne({email});
                if(!user){
                    return res.status(400).json({success,error:"login with correct credentials"});
                  }
                  const cmp=await bcrypt.compare(password,user.password);
                  if(!cmp){
                      return res.status(400).json({error:"login with correct credentials"}) 
                  }
                  const data={
                      user:{
                          id:user.id
                      }
                  }
                  const token=jwt.sign(data,'shhhhhh');
                  res.json({success:true,token})
              
            }catch(e){
                res.status(500).send("some error ocurred")
            }
        })

    module.exports=router;