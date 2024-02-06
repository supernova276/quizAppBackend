const {v4:uuid}=require("uuid")

const userdata={
    "data":[
        {
            id:uuid(),
            username:"Akshita",
            password:"akshita123",
            emailId:"akshita123@gmail.com",
        },
        {
            id:uuid(),
            username:"Anita",
            password:"anita123",
            emailId:"anita123@gmail.com",
        }
    ]
}
module.exports=userdata