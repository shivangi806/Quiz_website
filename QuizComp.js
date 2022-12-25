import React from 'react'
import { useState } from 'react';
import './style.css'
const QuizComp =()=>{
    var QuestionBank =[
        {
           Question : "What is the capital of India? 🕌" ,
           Answers : [
            {
                Answer : "Delhi", isCorrect : true
            },
            {
                Answer : "Patna", isCorrect : false
            },
            {
                Answer : "Mumbai", isCorrect : false
            },
            {
                Answer : "Rajasthan", isCorrect : false
            }
           ]
        }
        ,
        {
            Question : "Who is the PM of India? 🤵" ,
            Answers : [
             {
                 Answer : "Modi", isCorrect : true
             },
             {
                 Answer : "Sodi", isCorrect : false
             },
             {
                 Answer : "Lodhi", isCorrect : false
             },
             {
                 Answer : "Mafodi", isCorrect : false
             }
            ]
         }
          ,
         {
            Question : "When is Teacher's day Celebrated? 👨‍🏫 " ,
            Answers : [
             {
                 Answer : "5th september", isCorrect : true
             },
             {
                 Answer : "27th may", isCorrect : false
             },
             {
                 Answer : "11th september", isCorrect : false
             },
             {
                 Answer : "18th january", isCorrect : false
             }
            ]
         }
          ,
         {
            Question : "How many players are there in a team in cricket? 🏏 " ,
            Answers : [
             {
                 Answer : "11", isCorrect : true
             },
             {
                 Answer : "10", isCorrect : false
             },
             {
                 Answer : "20", isCorrect : false
             },
             {
                 Answer : "12", isCorrect : false
             }
            ]
         }
          ,
         {
            Question : "2 + 3 = ? 🧮" ,
            Answers : [
             {
                 Answer : "5", isCorrect : true
             },
             {
                 Answer : "2", isCorrect : false
             },
             {
                 Answer : "6", isCorrect : false
             },
             {
                 Answer : "7", isCorrect : false
             }
            ]
         }
    ]
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[score ,setScore ]=useState(0);
    const[showScore,setShowScore]=useState(false);

const handleAnswerResponse=(isCorrect)=>{
    if(isCorrect){
        setScore(score+1);
    }
    const nexQuestion = currentQuestion+1;
    if(nexQuestion < QuestionBank.length){
        setCurrentQuestion(nexQuestion)
    }
    else{
        setShowScore(true);
    }
}
    const resetQuiz=()=>{
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }
    console.log(QuestionBank);
    return(
        <div className='app'>
           {showScore ? (
            <div className='score-section'>
            You Scored {score} out of  {QuestionBank.length} 🎉🎊
                <>
                    <button type="submit" onClick={resetQuiz}>👉  Play Again 👈</button>
                </>
            </div>
           ) 
           : (
            <>
                <div className='question-section'>
                 <div className='question-count'>
                    <span>Q.{currentQuestion+1}</span>/{QuestionBank.length}
                 </div>
                 <div className='question-text'>
                    {QuestionBank[currentQuestion].Question}
                 </div>
                </div>
                <div className='answer-section'>
                    {QuestionBank[currentQuestion].Answers.map(((answer)=>
                      <button  onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                    ))} 
                </div>
            </>
           )
           }
        </div>
    )
}

export default QuizComp ;