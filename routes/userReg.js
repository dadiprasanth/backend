const { response } = require("express")
const express=require("express")
const mongoose=require("mongoose")
const router=express.Router()
const user=require("../models/usersModal")
mongoose.connect("mongodb://localhost/Users",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("connected")
})

router.post("/add",async( req,res)=>{
 try{
const data=await user.create(req.body)
console.log(data)

res.status(200).json({
    status:"success"
})
 }
 catch(e){
    res.status(500).json({
        message:"e.message"
    })

 }
})
module.exports=router