const express=require("express")
const route=express.Router();
module.exports=route
route.post("/add",(req,res)=>{
    try{
        console.log(req.body)
        return res.status(200).json({
            message:"sucess"
        })
    }catch(e){
        return res.status(404).json({
            status:"erroe",
            message:e.message
        })
    }
})