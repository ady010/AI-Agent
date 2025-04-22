- express mongoose cors dotenv passport passport-oauth2 

- create server

- create src folder
    - create app.js
        - import express
        - create express app
        - export app

    - create config 
        - config.js
        - PORT
        - GOOGLE-CLIENTID
        - MONGOURI
        - GOOGLE-CLIENTSECRET
        - GOOGLE-REDIRECT-URI
        - SECRET_KEY

    - create auth
        - passport.js
            - import passport
            - import config
            - import Strategy from passport-oauth2
            - passport.use(new Strategy({callback, clientId, clientSecret}), (accessToken, refreshToken, profile, done)=> {

            }  )
            - refresh token will be used to authenticate token through mcp server
            - where will we store the refresh token?
            - crypto js used to encrypt the refresh token
    
    - models
        - user.model.js
            - import mongoose
            - import crypto js
            - import config
            - userSchema
                - 
                - email 
                - token
            - userSchema.post('save', async function(next) {
                    if (this.isNew) {
                        this.token = cryptoJs.AES.encrypt(this.token, process.env.SECRET_KEY).toString();
                        await this.save();
                    }
                    next();
                })
            - export userModel = mongoose.model('user', userSchema);    

        - services
            - user.services.js
                - import userModel
                - create _UserService{
                    - created a method named as createUser
                        -async createUser({name, email, token}){
                            if(!name || !email || !token){
                                throw new Error('name, email and token are required');
                            }
                            const user = await userModel.create({name, email, token});
                            return user;
                        }
                }


- server.js
    - import app
    - import config
    - launch app        


- To explore the scopes you can checkout
    - GOOGLE PLAYGROUND
        - gmail api version 1
            - readonly(this are the scopes needed) 
            - send(this are the scopes needed)
        - google calendar api version 3    

        -11laps