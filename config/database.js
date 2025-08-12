
const mongoose = require('mongoose');

require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
      .then( () => {console.log("successfully connect to db")})
     .catch( (error) => {
        console.log("issue in connecting DB conection");
        console.error(error.message);
        process.exit(1);
     })
    
     }
     module.exports = dbConnect

