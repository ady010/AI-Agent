const { config } = require("dotenv")
config()
const app = require("../Backend/src/app")
require('dotenv').config()

app.listen(config.port, ()=>{
    console.log("Server is running")
})