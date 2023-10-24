import React from "react";
import { useState,useEffect  } from "react";
import Question from "./Question";
export default function App(){
  const [quizData,setQuizData] =useState([]);

  useEffect(()=>{
     async function getData(){
     const res =await fetch("http://localhost:9000/questions")
     const data =await res.json();
     setQuizData(arr=>[...arr,...data]);
      }
      getData();
  },[])
  return (
    <>
    <div>
      {quizData.map((question, idx) => (
        <Question key={idx} index={idx} question={question} />
      ))}
    </div>
    </>
  )
}