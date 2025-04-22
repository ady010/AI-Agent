const { config } = require("dotenv")
config()
const mongoose = require("mongoose")

const connect = ()=>{mongoose.connect(config.mongoURL)
    .then(()=>{
        console.log("Connected to database")
    })
    .catch(()=>{
        console.log("Failed to connect database")
    })
}

module.exports = connect