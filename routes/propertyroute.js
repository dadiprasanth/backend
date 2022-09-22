const express=require("express")
const blogs=require("../models/formSchema")
const route=express.Router();
module.exports=route
var i=354353;
route.post("/add",async(req,res)=>{
    try{
        await blogs.create({...req.body,ppdid:i++})
        return res.status(200).json({
            message:"sucess"
        })
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
         const info = await blogs.find();
        res.status(200).send(info);
        
    }catch(e){
        res.status(400).json({
            erroe:e.message
        })
    }
})