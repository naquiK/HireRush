const express = require('express')
const router = express.Router()

const {login , signupFreelancer} = require("../controllers/auth")

router.post("/login" , login)
router.post("/signupFreelancer" , signupFreelancer)
router.post('/signpuClient' , signupFreelancer)

module.exports=router