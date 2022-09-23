const { request } = require("express");
const express=require("express")
const blogs=require("../models/formSchema")
const jwt=require("jsonwebtoken");
const e = require("express");
const route=express.Router();
const secret="sugar"
module.exports=route
var i=354353;
route.post("/add",async(req,res)=>{
    try{
        //token authentication & add
        jwt.verify(req.headers.authorization, secret,async function(err, decoded) {
            if(err){
                res.status(400).json({
                    status:"error",
                    message:err.message
                })
            }else{
                    const data=await blogs.findOne({_id:decoded.data})
                    if(!data){
                        await blogs.create({...req.body,ppdid:i++})
                        return res.status(200).json({
                            message:"sucess"
                        })

                    }else{
                        return res.status(404).json({
                            status:"error",
                            message:"failed"})

                    }
            }
            
          });
      
    }catch(e){
        return res.status(404).json({
            status:"error",
            message:e.message
        })
    }
})
// route.get("/all",async(req,res)=>{
//     try{
//         const data=await blogs.find().sort({date:-1})
//         return res.status(200).json({
//             message:"sucess",
//             data
//         })
//     }catch(e){
//         return res.status(404).json({
//             status:"erroe",
//             message:e.message
//         })
//     }
// })
route.get("/" ,async(req,res)=>{

    try{
        //token authoentication &find 
        jwt.verify(req.headers.authorization, secret,async function(err, decoded) {
            if(err){
                res.status(400).json({
                    status:"error",
                    message:err.message
                })
            }else{
                    const data=await blogs.findOne({_id:decoded.data})
                    if(!data){
                             const info = await blogs.find();
                             res.status(200).send(info);
                            }else{
                                return res.status(404).json({
                                    status:"error",
                                    message:"failed"})
                            }
                        }

                    })
    }catch(e){
        res.status(400).json({
            erroe:e.message
        })
    }
})

route.put("/" ,async(req,res)=>{

    try{
        const info = await blogs.updateOne(req.body, {$set:{status:"Sold" , days:"0"}});
        res.status(200).json({status: "succes", message:"status is updated"})
    }catch(e){
        res.status(400).json({
            erroe:e.message
        })
    }
})

route.put("/" ,async(req,res)=>{

    try{
        const info = await blogs.updateOne(req.body, {$set:{days:"0"}});
        res.status(200).json({status: "succes", message:"status is updated"})
    }catch(e){
        res.status(400).json({
            erroe:e.message
        })
    }
})