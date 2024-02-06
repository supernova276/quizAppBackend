const jwt=require('jsonwebtoken')
require("dotenv").config()
const{SECRET}=require("../../configs/authConfig")

const Authenticate=(req,res,next)=>{

    let token=req.headers['x-access-token']

    jwt.verify(token,SECRET, function(err,payload){

        if(err)return res.status(401).send({message:"the user is not authenticated"})

       //payload contains the payload ie passed at the time when jwt is created and sent to the client
        const userId=payload.id;
        console.log(userId)
        next();
    })
    
}
module.exports={
    Authenticate
}