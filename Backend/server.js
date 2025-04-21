const { config } = require("dotenv")
const app = require("../Backend/src/app")
require('dotenv').config()

app.listen(config.port, ()=>{
    console.log("Server is running")
})