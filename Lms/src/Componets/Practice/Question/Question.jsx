import React from 'react'
import Practice from '../Practice'
import { Box, Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import "./Question.css"
export default function Question({setselect}) {
  let navigate=useNavigate()
   function changepage(qn){
    setselect(qn)
    navigate("/Editor")
   }
   let questions = [
    {
      question: "What is a higher-order function?",
      marks: "22",
      easy: "easy"
    },
    {
      question: "What is asynchronous behavior in JavaScript?",
      marks: "25",
      easy: "easy"
    },
    {
      question: "Explain closures in JavaScript.",
      marks: "20",
      easy: "medium"
    },
    {
      question: "What is the difference between `let`, `var`, and `const`?",
      marks: "15",
      easy: "easy"
    },
    {
      question: "What is the purpose of the `useEffect` hook in React?",
      marks: "18",
      easy: "easy"
    },
    {
      question: "How do you handle state in React using the `useState` hook?",
      marks: "22",
      easy: "easy"
    },
    {
      question: "What are the different lifecycle methods in React?",
      marks: "25",
      easy: "medium"
    },
    {
      question: "Explain the concept of virtual DOM in React.",
      marks: "20",
      easy: "medium"
    },
    {
      question: "What is JSX and how is it used in React?",
      marks: "18",
      easy: "easy"
    },
    {
      question: "How do you lift state up in React?",
      marks: "22",
      easy: "medium"
    },
    {
      question: "What is the difference between class components and functional components in React?",
      marks: "20",
      easy: "medium"
    },
    {
      question: "Explain event handling in React.",
      marks: "18",
      easy: "easy"
    },
    {
      question: "What are props in React and how are they used?",
      marks: "15",
      easy: "easy"
    },
    {
      question: "How do you perform form validation in React?",
      marks: "25",
      easy: "hard"
    },
    {
      question: "What is the purpose of the `useReducer` hook in React?",
      marks: "22",
      easy: "medium"
    },
    {
      question: "Explain the context API in React and how it is used.",
      marks: "25",
      easy: "hard"
    },
    {
      question: "What is the significance of keys in React lists?",
      marks: "20",
      easy: "medium"
    },
    {
      question: "How do you fetch data from an API in React?",
      marks: "25",
      easy: "medium"
    },
    {
      question: "Explain the concept of controlled and uncontrolled components in React.",
      marks: "22",
      easy: "medium"
    },
    {
      question: "What are the advantages of using TypeScript with React?",
      marks: "20",
      easy: "medium"
    },
    {
      question: "How do you optimize performance in a React application?",
      marks: "25",
      easy: "hard"
    },
    {
      question: "What is Redux and how does it help manage state in a React application?",
      marks: "22",
      easy: "hard"
    },
    {
      question: "What are React fragments and why are they useful?",
      marks: "18",
      easy: "easy"
    },
    {
      question: "How do you handle side effects in React using middleware like Redux Thunk?",
      marks: "25",
      easy: "hard"
    },
    {
      question: "What is the role of React Router in a React application?",
      marks: "20",
      easy: "medium"
    }
  ];
  
  
  return (
    <div>
      <Practice/>
      {
        questions.map((qn)=>(
         <Card sx={{mt:"1rem",backgroundColor:'darkblue',color:'white'}} >
           <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
           <h3>{qn.question}</h3>
           <button onClick={()=>changepage(qn)}  className='solve'>solve</button>
           </Box>
           <Box sx={{display:"flex",alignItems:"center",ml:"2rem"}}>
           <h2>{qn.marks}</h2>
           <p>{qn.easy}</p>
           </Box>
         </Card>
        ))
      }
      </div>
  )
}
