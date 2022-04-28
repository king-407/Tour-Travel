const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
require('./db');
var cors=require('cors');
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/api/travel',require('./routers/userRouter'));
app.use('/api/blog',require('./routers/blogRouter'));

app.use(cors());
app.use(express.json());
app.listen(5000,()=>{
    console.log("listening to port 5000")
})
