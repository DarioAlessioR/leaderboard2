/* eslint-disable linebreak-style */
import add from './modules/add.js';
import showscorelist from './modules/showscorelist.js';
import './style.css';

// localStorage.clear()

const scorelist = [
  {
    id: 0,
    name: '',
    score: 0,
  },
];

// instructions to populate local storage with basic array in case it has null value inside
const localSt = JSON.parse(localStorage.getItem('scorelist'));
if (localSt == null) {
  localStorage.setItem('scorelist', JSON.stringify(scorelist));
} else {
  showscorelist(localSt);
}

// instructions to capture the input of name and score and send them to add function
// to be inserted in array
const submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', () => {
  const name = document.getElementById('name');
  const yourname = name.value;
  const score = document.getElementById('score');
  const yourscore = score.value;
  add(yourname, yourscore);
  name.value = '';
  score.value = '';
});

export default scorelist;
