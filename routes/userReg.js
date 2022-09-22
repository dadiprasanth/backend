
const express=require("express")

const router=express.Router()
const user=require("../models/usersModal")

router.post("/add",async( req,res)=>{
    try{
        const {MailID,password}=req.body
        bcrypt.hash(password,10, async function(err,hash){
          if(err){
            res.status(500).json({
                status:"failed",
                message:err.message
            })
          }
   const data=await user.create({
    MailID:MailID,
    password:hash
   })
   console.log(data)
   
   res.status(200).json({
       status:"success"
   })
})

    }
    catch(e){
       res.status(500).json({
           message:"e.message"
       })
   
    }
   })
module.exports=router