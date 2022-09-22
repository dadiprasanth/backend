
const express=require("express")
const bcrypt = require('bcrypt');
const router=express.Router()
const user=require("../models/usersModal")

router.post("/add",async( req,res)=>{


    try{
        const {MailID,password}=req.body
        const check=async()=>{
        const chekdata=await user.findOne({MailID:MailID})
        
            if(chekdata!=null){
                return res.status(400).json({
                    status:"error",
                    message:"user is already registerd go to signin page "

                })
            } else{
                bcrypt.hash(password,10, async function(err,hash){
                    if(err){
                     return res.status(500).json({
                          status:"failed",
                          message:err.message
                      })
                    }
                  const data=await user.create({MailID:MailID,password:hash})
                  console.log(data)
             
                  res.status(200).json({ 
                                        status:"success",
                                        message:"Registration sucessfull"  
                      
                                     })  
          
                  })
                
            }  
        }      
        check()
      


    }
    catch(e){
       res.status(500).json({
           message:"e.message"
       })
   
    }
   })
   router.post("/login", async(req,res)=>{
    try{
      const {email,password}=req.body
      console.log(password)
      const data= await user.findOne({MailID:email})
      console.log(data)
      console.log(data.password)

      if(!data){
        return res.status(400).json({
            status:"failed",
            message:"User is not registered"

        })
      }
      bcrypt.compare(password,data.password,function(err,result){
        if(err){
            res.status(500).json({
                status:"failed",
                message:err.message
            })
        }
        res.json({
            status:"Success"
        })
      })
    }
    catch(e){
        res.status(500).json({
            status:"failed",
            message:"e.message"
        })
    }
})
module.exports=router