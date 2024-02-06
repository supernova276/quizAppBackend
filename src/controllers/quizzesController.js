const quizzes=require("../../db/quizzes")

exports.getQuizzes=(req,res)=>{
   // this makes sure that the response is sent in the json format
   res.status(200).json(quizzes)
}