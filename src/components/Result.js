import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css';
const Result = ({ score = 0, totalQuestions = 0, user = 'Guest' }) => {
  const navigate = useNavigate();

  const handleLeaderboard = () => {
    navigate('/leaderboard');
  };

  return (
    <div className="result-container">
      <h1>Quiz Result</h1>
      <h2>{user}, you scored {score} out of {totalQuestions}!</h2>
      <button onClick={handleLeaderboard}>View Leaderboard</button>
    </div>
  );
};

export default Result;
