import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'https://api.jsonserve.com/Lw5CrX';

/**
 * Fetch quiz data from the API
 * @returns {Promise<Array>} - Array of quiz questions
 */
export const fetchQuizData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; // Assuming the API returns an array of questions
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};

/**
 * Save user score to the backend (optional)
 * @param {string} username - The name of the user
 * @param {number} score - The score achieved by the user
 * @returns {Promise<Object>} - Response from the server
 */
export const saveUserScore = async (username, score) => {
  try {
    const response = await axios.post('https://your-backend-api.com/scores', {
      username,
      score,
    });
    return response.data;
  } catch (error) {
    console.error('Error saving user score:', error);
    throw error;
  }
};

/**
 * Fetch leaderboard data from the backend (optional)
 * @returns {Promise<Array>} - Array of leaderboard entries
 */
export const fetchLeaderboard = async () => {
  try {
    const response = await axios.get('https://your-backend-api.com/leaderboard');
    return response.data; // Assuming the API returns an array of leaderboard entries
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};