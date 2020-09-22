import React from 'react'
import './home.css';

export default function home() {
    return (
        <main className="main">
            <h1 className="title">Quiz App</h1>

            <div className="form-game">
                <div className="form-options">
                    <a href="/quick">Quick Start</a>
                </div>
                <div className="form-options">
                    <a href="/custom">Custom Start</a>
                </div>
            </div>

        </main>
    )
}
