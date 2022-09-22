
const express=require("express")
const bcrypt = require('bcrypt');
const router=express.Router()
const user=require("../models/usersModal")


router.post("/add",async( req,res)=>{
 try{
    const{MailID,password}=req.body
    console.log(req.body)
    // bcrypt.hash(password, 10, async function(err, hash) {
    //     // Store hash in your password DB.
    //     if(err){
    //         return res.status(400).json({
    //             message:err.message
    //         })

    //     }
    //     else{
    //         console.log(hash)
    //         const data=await user.create({MailID,password:hash})
    //         console.log(data)
    //             res.status(200).json({
    //             status:"success"
    //                             })
            
    //     }
    // });
   
 }
 catch(e){
    res.status(500).json({
        message:e.message
    })

 }
})
module.exports=router