const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const freelancerSchema = new mongoose.Schema({
    
    first_Name:{
        type:String,
        required:true
    },
    last_Name:{
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
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
       
    }]
})

freelancerSchema.methods.generateAuthToken =async function() {
    try{
        console.log(this._id)

        const token = jwt.sign({_id:this._id} , process.env.JWT_SECRET)
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        console.log("hello")
        return token
        
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
         success:false,
         message:'error in generating token'
        })
    }     

}

freelancerSchema.pre("save" ,async function(next) {

    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password , 10)
    }
})

module.exports = mongoose.model("Register" , freelancerSchema)