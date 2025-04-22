import { config } from "dotenv"
config()

const _config = {
    port : process.env.PORT,
    mongoURI : process.env.MONGO_URI
}  
module.exports=  Object.freeze(_config)

         

           