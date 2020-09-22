import React from 'react'
import './result.css';

export default function Result(props) {
    return (
        <main className="main-result">
          <div className="result-feedback">
              <h1>You've finished the quiz!</h1>
              <h1>Score:{props.points}/10</h1>
              <a className="feedback-button" href="/">Again?</a>
          </div>
        </main>
    )
}
