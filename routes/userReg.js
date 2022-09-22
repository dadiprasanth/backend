
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
                    message:"User is already registerd  "

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
module.exports=router