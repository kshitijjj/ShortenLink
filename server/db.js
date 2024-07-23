const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
mongoose.connect("mongodb+srv://myank07official:2UBzNhUWSesXI8dT@mayank.jzywnhr.mongodb.net/serverDB").then(()=>console.log("db connected successfully"));


/* USER CREDENTIALS SCHEMA */
const serverUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

serverUserSchema.pre('save',async function(next){
    const user=this;

    if(!user.isModified('password'))return next();
    try {
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(user.password,salt);
        user.password=hashPassword;
        next();
    } catch (error) {
        console.log(error); 
    }
})

serverUserSchema.methods.comparePassword=async function(userPass){
    try {
        const isPass=await bcrypt.compare(userPass,this.password);
        return isPass;
    } catch (error) {
        console.log(error);
    }
}
/* 
/* LINK SHORTNER SCHEMA */
 const urlSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    inputUrl:{
        type:String,
        required:true
    },
    shortenUrl:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },
    clicks:{
        type:Number
    }
}) 

/* module.exports=mongoose.model("user",serverUserSchema); */

const user=mongoose.model("user",serverUserSchema);
const url=mongoose.model("url",urlSchema);

module.exports={user,url};