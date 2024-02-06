
const{getQuizzes}=require("../controllers/quizzesController")
const{Authenticate}=require("../middlewares/authjwtMiddleware")
const{pageNotFound}=require("../middlewares/pageNotFound")

module.exports=(app)=>{
    app.get("/quizApp/api/v1/quizzes",[Authenticate],getQuizzes)
    app.use(pageNotFound)
}
