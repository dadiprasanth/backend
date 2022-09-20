const express=require("express")
const mongoose=require("mongoose")
const app=express()
const port=8080
app.listen(port,()=>console.log(`app is listening at${port}`))
mongoose.connect('mongodb://localhost/my_database',err=>{
    if(err){
        console.log("connection failed")
    }else{
        console.log("connected to database")
    }
})