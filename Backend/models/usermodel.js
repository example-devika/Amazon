const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobilenumber:{
        type:Number,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        unique:true,
        required:true
    }
})
module.exports=mongoose.model("User",UserSchema)