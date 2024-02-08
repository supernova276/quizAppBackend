const{getQuizzes}=require("../controllers/quizzesController")
const{pageNotFound}=require("../middlewares/pageNotFound")

module.exports=(app)=>{
    app.get("/quizApp/api/v1/categories",getQuizzes)
    app.use(pageNotFound)
}