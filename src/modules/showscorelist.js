/* eslint-disable linebreak-style */

// const scorelist = JSON.parse(localStorage.getItem('scorelist'));

// Function showscorelist builds the list and shows it on screen
const showscorelist = (scorelist) => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (let i = scorelist.length - 1; i > 0; i -= 1) {
    // Create a line div to put inside name and score
    const line = document.createElement('div');
    line.setAttribute('class', 'linelist');
    // Create p element to inject name and score
    const name = document.createElement('p');
    name.setAttribute('name', 'name');
    name.setAttribute('class', 'name');
    name.innerHTML = `${scorelist[i].name} : ${scorelist[i].score}`;
    // Append name to line and line to list
    line.appendChild(name);
    list.appendChild(line);
  }
};

export default showscorelist;