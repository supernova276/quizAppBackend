const users=require("../../db/users")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
require("dotenv").config()
const {SECRET}=require("../../configs/authConfig")
const {v4:uuid}=require("uuid")


exports.userSignUp=(req,res)=>{

  const{username,password,emailId}=req.body;

   let userAleradyExisits=users.data.some(user=>user.username===username && user.password===password)
   if(userAleradyExisits){

    res.status(422).send({message:"the user already exists"})
   }
   else{

    const id=uuid()
    const newUser={id,username,password,emailId}
    users.data=[...users.data,newUser]
    var token=jwt.sign({id: username},SECRET,{expiresIn:'24h'})
    // res.status(200).json({message:`success-created new user-->${username}::${token}`})
    res.status(200).json({username,password,accesToken:token })
   }
}


exports.userLogin=(req,res)=>{

    const{username,password}=req.body;
    // res.status(200).send({username,password})

    let isUserVerified=users.data.some(user=>user.username===username && user.password===password)
    console.log(isUserVerified)
    if(isUserVerified){

        var token=jwt.sign({id: username},SECRET,{expiresIn:'24h'})
        console.log(token)

        res.status(200).json({username,password,accesToken:token })
    }
    else{
        res.status(401).json({message:"invalid credentials"})
    }
}