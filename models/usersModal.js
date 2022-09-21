const mongoose=require("mongoose")
const studentSchema= mongoose.Schema({
    MailID:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
   
})
module.exports=mongoose.model("data",studentSchema)