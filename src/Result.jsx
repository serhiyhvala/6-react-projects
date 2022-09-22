import React from 'react'
import { questions } from './questions'

const Result = ({ correct, setStep, setCorrect }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        You guessed the {correct} answer from {questions.length}
      </h2>
      <button
        onClick={() => {
          setStep(0)
          setCorrect(0)
        }}
      >
        Try Again!
      </button>
    </div>
  )
}

export default Result
