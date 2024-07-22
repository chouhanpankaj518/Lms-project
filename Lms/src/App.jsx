import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Componets/Home/Home'
import Course from './Componets/Course/Course'
import Practice from './Componets/Practice/Practice'
import Navbar from './Navbar/Navbar'
import Quize from './Componets/Practice/Quize/Quize'
import Question from './Componets/Practice/Question/Question'
import JavaScript from './Componets/Practice/Quize/JavaScript'
import Htmlcss from './Componets/Practice/Quize/Htmlcss'
import Reactjs from './Componets/Practice/Quize/Reactjs'
import Editor from './Componets/Practice/Question/Editor.jsx'
import CardDetails from './Componets/Course/CardDetails.jsx'
import LoginPage from './Navbar/Login.jsx'
import Signup from './Navbar/Signup.jsx'

export default function App() {
  let data = [
    {
      Course: 'A javascript for beginners',
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      Componets: "Javascript2",
      detail:"A complet guid",
      Topic:'Javascript2',
      Week1: 'JavaScript Basics: Variables, Data Types, and Operators',
      Week2: 'Control Structures: Conditionals and Loops',
      Week3: 'Functions and Scope',
      Week4: 'Arrays and Objects',
      Week5: 'DOM Manipulation',
      Week6: 'Events and Event Handling',
      Week7: 'Introduction to Asynchronous JavaScript',
      Week8: 'Promises and Async/Await',
      Week9: 'Error Handling and Debugging',
      Week10: 'ES6+ Features',
      Week11: 'Introduction to Web APIs'
    },
    {
      Course: "A java for beginners",
      Componets: "Java",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      detail:"A complet guid",
      Topic: 'Java',
      Week1: 'Java Basics: Syntax, Variables, and Data Types',
      Week2: 'Control Flow: Conditionals and Loops',
      Week3: 'Methods and Arrays',
      Week4: 'Object-Oriented Programming: Classes and Objects',
      Week5: 'Inheritance and Polymorphism',
      Week6: 'Interfaces and Abstract Classes',
      Week7: 'Exception Handling',
      Week8: 'File I/O and Serialization',
      Week9: 'Java Collections Framework',
      Week10: 'Introduction to GUI Programming with Java Swing',
      Week11: 'Multithreading and Concurrency'
    },
    {
      Course: "A C++ for beginners",
      Componets: "Cplusplus",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      detail:"A complet guid",
      Topic: 'Cplusplus',
      Week1: 'C++ Basics: Syntax, Variables, and Data Types',
      Week2: 'Control Structures: Conditionals and Loops',
      Week3: 'Functions and Arrays',
      Week4: 'Pointers and References',
      Week5: 'Object-Oriented Programming: Classes and Objects',
      Week6: 'Inheritance and Polymorphism',
      Week7: 'Operator Overloading',
      Week8: 'Templates and Generic Programming',
      Week9: 'Exception Handling',
      Week10:' Standard Template Library (STL)',
      Week11:' File I/O and Streams'

    },
    {
      Course: "A php for beginners",
      Componets: "Php",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      detail:"A complet guid",
      Topic: 'Php',
      Week1: 'Introduction to PHP: Syntax, Variables, and Data Types',
      Week2: 'Control Structures and Functions',
      Week3: 'Arrays and Superglobals',
      Week4: 'Working with Forms and User Input',
      Week5: 'Introduction to Databases and SQL',
      Week6: 'PHP and MySQL Integration',
      Week7: 'Object-Oriented Programming in PHP',
      Week8: 'Sessions and Cookies',
      Week9: 'File Handling and Uploads',
      Week10:' RESTful APIs with PHP',
      Week11:' Security Best Practices in PHP'
    },
    {
      Course: "A Go for beginners",
      Componets: "Go",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      detail:"A complet guid",
      Topic: 'Go',
      Week1: 'Go Basics: Syntax, Variables, and Data Types',
      Week2: 'Control Structures and Functions',
      Week3: 'Arrays, Slices, and Maps',
      Week4: 'Structs and Interfaces',
      Week5: 'Error Handling and Panic Recovery',
      Week6: 'Concurrency: Goroutines and Channels',
      Week7: 'Advanced Concurrency Pat      tern',
      Week8: 'Testing and Benchmarking in Go',
      Week9:' Working with Files and I/O',
      Week10:' Building Web Applications with Go',
      Week11:' Go Tools and the Standard Library'
    },
    {
      Course: "A python for beginners",
      Componets: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      detail:"A complet guid",
      Topic: 'Python',
      Week1: 'Python Basics: Syntax, Variables, and Data Types',
      Week2: 'Control Flow: Conditionals and Loops',
      Week3: 'Functions and Modules',
      Week4: 'Lists, Tuples, and Dictionaries',
      Week5: 'File Handling and Exception Handling',
      Week6: 'Object-Oriented Programming in Python',
      Week7: 'Working with Libraries: NumPy and Pandas',
      Week8: 'Introduction to Web Scraping',
      Week9: 'Database Operations with SQLite',
      Week10:' Introduction to Web Development with Flask',
      Week11:' Data Visualization with Matplotlib'
    }
  ]


let [select,setselect]=useState([])
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>     
        <Route path='Course'element={<Course data={data}/>}/>           
        <Route path='Practice' element={<Practice/>}/>
        <Route path='/Practice/Quize' element={<Quize />}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Practice/Question' element={<Question  setselect={setselect}/>}/>
        <Route path='/practice/Quize/JavaScript'element={<JavaScript/>}/>
        <Route path='/Practice/Quize/Htmlcss' element={<Htmlcss/>}/>
        <Route path='/Practice/Quize/Reactjs' element={<Reactjs/>}/>
        <Route path='/Editor' element={<Editor select={select} />}/>
        <Route path='/Course/CardDetails' element={<CardDetails/>}/>
       
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

