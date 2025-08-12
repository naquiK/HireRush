const bcrypt = require('bcrypt')
const register = require('../models/register')
const jsonwebtoken = require('jsonwebtoken')
const Auth = require("../middleware/Auths")
const cookieParser=require("cookie-parser")

exports.signupFreelancer = async (req,res) => {
    try{
        const users = new register({
            first_Name:req.body.first_Name,
            last_Name:req.body.last_Name,
            password: req.body.password,
            email: req.body.email,   
        })



        const token = await users.generateAuthToken()
         await users.save()
         
         res.cookie("jwt" , token ,{
            expires:new Date(Date.now() + 1000*60*60*2),
            httpOnly:true
         })

         return res.status(200).render("firstPageAL")
    } catch(error){
       console.log(error)
       return res.status(500).json({
        success:false,
        message:'User already Register '
       })
    }
    }

    exports.login = async (req,res) =>{
        try{
            const email = req.body.email
            const password = req.body.password
            const useremail = await register.findOne({email:email})
        
            const isMatch = await bcrypt.compare(password , useremail.password)

            const token = await useremail.generateAuthToken()

            res.cookie("jwt" , token ,{
                expires:new Date(Date.now() + 1000*60*60*2),
                httpOnly:true
                // secure:true
             })


           
            if(isMatch){
                res.status(201).render("firstPageAL")
        }
        else{
            res.send("invalid login delails")
            
            }
        
        }
            catch(error){
                console.log(error)
                return res.status(500).json({
                 success:false,
                 message:'enter details carefully invalid details'
                })
             }
        }