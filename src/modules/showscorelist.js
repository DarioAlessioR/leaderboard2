/* eslint-disable linebreak-style */

// Function showscorelist builds the list and shows it on screen
const showscorelist = (gameScore) => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (let i = 0; i < gameScore.length; i += 1) {
    // Create a line div to put inside name and score
    const line = document.createElement('div');
    line.setAttribute('class', 'linelist');
    // Create p element to inject name and score
    const namescore = document.createElement('p');
    namescore.setAttribute('class', 'name');
    namescore.innerHTML = `${gameScore[i].user} : ${gameScore[i].score}`;
    // Append namescore to line and line to list
    line.appendChild(namescore);
    list.appendChild(line);
  }
};

export default showscorelist;