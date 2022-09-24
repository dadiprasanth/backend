const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const property=require("./routes/propertyroute")
const user=require('./routes/userReg')
const cors=require("cors")
const app=express()
const port=8080
app.listen(port,()=>console.log(`app is listening at${port}`))
mongoose.connect('mongodb+srv://pankajMali:pankaj98@cluster0.dj3vt0p.mongodb.net/realestate',err=>{
    if(err){
        console.log("connection failed")
    }else{
        console.log("connected to database")
    }
})
app.use(cors())
app.use(bodyparser.json())
app.use("/property",property) 
app.use("/users",user)
