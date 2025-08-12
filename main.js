const express = require('express')
const path = require('path')
const hbs = require('hbs')
const Register = require("./models/register")
const cookieParser=require("cookie-parser")
const Auth = require("./middleware/Auths")
const app = express()


require('dotenv').config()
const port = process.env.PORT || 4000
 
  
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
const auth = require("./controllers/auth")


const static_path=path.join(__dirname , "./public")
app.use(express.static(static_path))

app.set("view engine" , "hbs")
app.listen(port  , ()=> {
    console.log(`app is listen ${port}`)
})

const dbConnect = require("./config/database")
dbConnect()


const user =require('./routes/Register')
app.use('/' , user)

app.get('/', (req,res) => {
    res.render("firstPage")
} )

app.get('/login' , (req,res) => {
    res.render("login")
})

app.get('/card_digital-marketing.hbs' , (req,res) => {
    res.render("card_digital-marketing")
})

app.get('/card_soft-engg.hbs' , (req,res) => {
    res.render("card_soft-engg")
})

app.get('/card_graphic-designer.hbs' , (req,res) => {
    res.render("card_graphic-designer")
})

app.get('/card_web-dev.hbs', (req,res) => {
    res.render("card_web-dev")
})

app.get("/logout", async (req , res) => {
    try{
    
       res.render("firstPage")
    }
    catch(error){
        res.status(500).send(error)
    }
    
})
app.get('/choice' , (req,res ) => {
    res.render("choice")
})
app.get('/signupFreelancer' , (req,res)=>{
    res.render("signupFreelancer")
}) 
app.get('/signupClient' , (req,res)=>{
    res.render("signupClient")
}) 




