
const express=require("express")

const router=express.Router()
const user=require("../models/usersModal")


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