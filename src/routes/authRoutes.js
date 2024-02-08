const {userLogin,userSignUp}=require("../controllers/authController")

module.exports=(app)=>{

    app.post("/quizApp/api/v1/auth/signup",userSignUp)
    app.post("/quizApp/api/v1/auth/login",userLogin)
}