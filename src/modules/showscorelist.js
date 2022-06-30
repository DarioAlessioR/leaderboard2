/* eslint-disable linebreak-style */

// Function showscorelist builds the list and shows it on screen
const showscorelist = (gameScore) => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (let i = 0; i < gameScore.length; i += 1) {
    // Create a line div to put inside name and score
    const line = document.createElement('div');
    line.setAttribute('class', 'linelist');
    // Create p elements to inject name and score
    const name = document.createElement('p');
    name.setAttribute('class', 'name');
    const score = document.createElement('p');
    score.setAttribute('class', 'score');
    score.innerHTML = `${gameScore[i].score}`;
    name.innerHTML = `${gameScore[i].user} : `;
    // Append name and score to line and line to list
    line.appendChild(name);
    line.appendChild(score);
    list.appendChild(line);
  }
};

export default showscorelist;