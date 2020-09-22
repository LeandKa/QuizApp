import React, { useEffect, useState } from 'react';
import './Questions.css';
import { decode } from 'he';
import Result from '../result/Result';

export default function Questions(props) {

    const [question, setQuestion] = useState([]);
    const [answers,setAnswers] = useState([]);
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(false);
    const [points,setPoints] = useState(0);


    useEffect(() => {
        setQuestion(props.array);
        setAnswers(props.arrayQuestion);
    }, [props.array])


    function onClick(resp) {
        if(resp === question[count].correct_answer){
          if(points===10){
             setPoints("10")
          }else{
              setPoints(points+1)
          }
        }
        if (count === 10) {
            setResult(true);
        }
        setCount(count + 1);
    }


    if (question.length === 0) {
        return (
            <h1>Nada</h1>
        )

    } if (result) {
        return (
        <Result points={points}></Result>
        )
    } else {
        var array = question[count];
        var arrayPergunta = answers[count];
        return (
            <main className="main">
                <span className="question">{decode(array.question)}</span>
                <div className="questions-div">
                <div className="questions">
                    <span onClick={() => onClick(arrayPergunta[0])} className="awsner">{decode(arrayPergunta[0])}</span>
                    <span onClick={() => onClick(arrayPergunta[1])} className="awsner">{decode(arrayPergunta[1])}</span>
                </div>
                <div className="questions">
                    <span onClick={() => onClick(arrayPergunta[2])} className="awsner">{decode(arrayPergunta[2])}</span>
                    <span onClick={() => onClick(arrayPergunta[3])} className="awsner">{decode(arrayPergunta[3])}</span>
                </div>
                </div>
            </main>
        )
    }
}
