const{getQuizzes}=require("../controllers/quizzesController")

module.exports=(app)=>{
    app.get("/quizApp/api/v1/categories",getQuizzes)
}