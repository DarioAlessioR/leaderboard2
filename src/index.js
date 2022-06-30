/* eslint-disable linebreak-style */

import showscorelist from './modules/showscorelist.js';
import './style.css';

// Declare variables for html elements
const name = document.getElementById('name');
const score = document.getElementById('score');
const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

// Create new game in API
const newGame = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'Leaderboard Dario Game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const id = await response.json();

  return id;
};
newGame();

// Send data to API
const sendData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3bu70kjf0It1E5FjCpPj/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const dataSent = await response.json();
  return dataSent;
};

// Give submit button atribute to call functuon sendData on click
// Clear value from input fields after calling sendData
submit.addEventListener('click', (e) => {
  e.preventDefault();
  sendData();
  name.value = '';
  score.value = '';
});

// Get data from API
const receiveData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3bu70kjf0It1E5FjCpPj/scores',
    {
      method: 'GET',
      header: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const gameScore = await response.json();
  // If data receive from API is not null, call function showscorelist to print data on screen
  if (gameScore !== null) {
    showscorelist(gameScore.result);
  }
};

// Give to refresh button capacity to call function receiveData on click
refresh.addEventListener('click', receiveData);

receiveData();
