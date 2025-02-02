import React from 'react';
import './Leaderboard.css';
const Leaderboard = () => {
  const leaderboardData = [
    { name: 'Alice', score: 8 },
    { name: 'Bob', score: 7 },
    { name: 'Charlie', score: 6 },
  ];

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;