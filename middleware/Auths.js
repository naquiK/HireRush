const jwt = require("jsonwebtoken")
const Register = require("../models/register")


const Auth = async(req , res , next) => {
    try{
        const token = req.cookies.jwt
        const verifyUser= jwt.verify(token , process.env.JWT_SECRET)
        const user = await Register.findOne({_id: verifyUser._id})
        req.token=token
        req.user=user

        
    }
    catch(error){
        res.status(401).send(error)
    }
    
}

module.exports=Auth