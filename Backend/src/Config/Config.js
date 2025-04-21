import { config } from "dotenv"
config()

const _config = {
    port : process.env.PORT,
    mongoURL : process.env.MONGO_URI
}  
export default Object.freeze(_config)

         

           