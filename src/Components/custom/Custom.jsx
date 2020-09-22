import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Questions from '../Questions/Questions';
import './custom.css'

export default function Custom() {

    const [category,setCategory] = useState("");
    const [results,setResults] = useState([]);
    const [loading,setLoading]= useState(true);
    const [questions,setQuestions] = useState([]);
    const [dificult,setDificult] = useState('');


   function handleSubmit (event){
       console.log(category)
        event.preventDefault();
        Axios.get(`https://opentdb.com/api.php?amount=11&category=${category}&type=multiple&difficulty=${dificult}`)
        .then(result =>{
            setLoading(false);
            var arrayQuestion = []
            result.data.results.forEach(element => {
                arrayQuestion.push(element.incorrect_answers.concat(element.correct_answer).sort(()=>Math.random() -0.5))
                setQuestions(arrayQuestion)
            });
            setResults(result.data.results);
            
        })
    }

   function handleOnChange(event){
        switch(event.target.value){
            case "Books":
                setCategory("10");
             break;
            case "Film":
                setCategory("11");
             break;
            case "Video Games":
                setCategory("15");
             break;
            case "General Knowledge":
            setCategory("9");
            break;
            case "Science & Nature":
                setCategory("17");
             break;
             default:
                setCategory("10");
        }
    }

    function handleOnDificult(event){
        switch(event.target.value){
            case "Hard":
                setDificult("hard");
             break;
            case "Medium":
                setDificult("medium");
             break;
            case "Easy":
                setDificult("easy");
             break;
             default:
                setDificult("Hard");
        }
    }
    useEffect(()=>{
      console.log(results)
      console.log(questions)
    },[results])


    if(loading){
        return (
            <main className="main">
                <h1>Choose a Category</h1>
              <form onSubmit={handleSubmit}>
                <select className="select" name="category" onChange={handleOnChange}>
                    <option>Books</option>
                    <option>Film</option>
                    <option>Video Games</option>
                    <option>General Knowledge</option>
                    <option>Science & Nature</option>
                </select>
                <select className="select" name="dificult" onChange={handleOnDificult}>
                    <option>Hard</option>
                    <option>Medium</option>
                    <option>Easy</option>
                </select>
                   <button>Ready</button>
                   <a className="back" href="/">Back</a>
                </form>
            </main>
        )
    }else{
        return(
         <Questions array={results} arrayQuestion={questions}></Questions>
        )
    }
}
