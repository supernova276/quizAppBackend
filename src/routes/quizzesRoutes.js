
const{getQuizzes}=require("../controllers/quizzesController")
const{Authenticate}=require("../middlewares/authjwtMiddleware")

module.exports=(app)=>{
    app.get("/quizApp/api/v1/quizzes",[Authenticate],getQuizzes)
}
