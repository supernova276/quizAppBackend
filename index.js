const express=require("express")
const quizzes=require("./db/quizzes")
const cors=require('cors')
const app=express()
const quizzesRoutes= require("./src/routes/quizzesRoutes")
const authRoutes=require("./src/routes/authRoutes")
const PORT=3000

app.use(express.json())

app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json("hello world")
})
quizzesRoutes(app)
authRoutes(app)

app.listen(PORT,()=>{
    console.log("your application is running on port 3000")
})