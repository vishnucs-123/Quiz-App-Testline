import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Result from './Result';
import './Quiz.css';
const Quiz = ({ user }) => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    axios.get('https://api.jsonserve.com/Lw5CrX')
      .then(response => setQuizData(response.data))
      .catch(error => console.error('Error fetching quiz data:', error));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <Result score={score} totalQuestions={quizData.length} user={user} />;
  }

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <h2>Question {currentQuestion + 1}/{quizData.length}</h2>
      <h3>{quizData[currentQuestion]?.question}</h3>
      <div className="answers">
        {quizData[currentQuestion]?.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer.isCorrect)}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;