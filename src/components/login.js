import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  // Added password state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);  // You may want to also pass the password if needed
    navigate('/quiz');
  };

  return (
    <div className="auth-container">
      <h1>Welcome to the Quiz Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"  // Changed to password type for better security
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Updated to setPassword
          required
        />
        <button type="submit">Start Quiz</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>.
      </p>
    </div>
  );
};

export default Login;
