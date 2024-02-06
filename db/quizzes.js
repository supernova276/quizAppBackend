const {v4:uuid}=require("uuid")

const quizzes={
    data:[
        {
            category:"World Geography",
            _id:uuid(),
            description:"you can test your knowledge in world geography",
            quiz:[
                {
                    question:"What country has the most islands in the world",
                    options:[
                        {_id:uuid(),option:"USA",isCorrect:false},
                        {_id:uuid(),option:"Canada",isCorrect:false},
                        {_id:uuid(),option:"Australia",isCorrect:false},
                        {_id:uuid(),option:"Sweden",isCorrect:true}
                    ]
                },
                {
                    question:"Name the largest (not highest) mountain range in the world?",
                    options:[
                        {_id:uuid(),option:"Dhauladhars",isCorrect:false},
                        {_id:uuid(),option:"kanchanjanga",isCorrect:false},
                        {_id:uuid(),option:"Three Holy Mountains",isCorrect:false},
                        {_id:uuid(),option:"The Andes",isCorrect:true},
                    ]
                },
                {
                    question:"Where is the lowest natural place on planet Earth?",
                    options:[
                        {_id:uuid(),option:"Marina Trench",isCorrect:true},
                        {_id:uuid(),option:"Turpan Pendi",isCorrect:false},
                        {_id:uuid(),option:"The dead sea",isCorrect:false},
                        {_id:uuid(),option:"Denakil",isCorrect:false},
                    ]
                }
            ]

        },
        {
            category:"Film & TV",
            _id:uuid(),
            description:"you can test your knowledge in Film & TV",
            quiz:[
                {
                    question:"When was Netflix founded ?",
                    options:[
                        {_id:uuid(),option:"2001",isCorrect:false},
                        {_id:uuid(),option:"1998",isCorrect:false},
                        {_id:uuid(),option:"1997",isCorrect:true},
                        {_id:uuid(),option:"2005",isCorrect:false},
                    ]
                },
                {
                    question:"What was the most-watched series on Netflix in 2019",
                    options:[
                        {_id:uuid(),option:"dark",isCorrect:false},
                        {_id:uuid(),option:"the crown",isCorrect:false},
                        {_id:uuid(),option:"stranger things",isCorrect:false},
                        {_id:uuid(),option:"the summer i turned pretty",isCorrect:false},
                    ]
                },
                {
                    question:"Name Pixar’s first feature-length movie",
                    options:[
                        {_id:uuid(),option:"Up",isCorrect:false},
                        {_id:uuid(),option:"Toy Story(1995)",isCorrect:true},
                        {_id:uuid(),option:"coco",isCorrect:false},
                        {_id:uuid(),option:"secrete life of pets",isCorrect:false},
                    ]
                }
            ]
        }

    ]
}
module.exports=quizzes