/* eslint-disable linebreak-style */
import showscorelist from './showscorelist.js';

// Function add to save to the array the data captured in input form.
// It shows error message if try to save empty field
const add = (yourname, yourscore) => {
  if (yourname.length < 1 || yourscore < 1) {
    const message = document.getElementById('message');
    message.innerHTML = 'Please, type your name and a score greater than 0';
  } else {
    const message = document.getElementById('message');
    message.innerHTML = '';
    const scorelist = JSON.parse(localStorage.getItem('scorelist'));
    scorelist.push(
      {
        id: scorelist.length > 0 ? scorelist[scorelist.length - 1].id + 1 : 1,
        name: yourname,
        score: yourscore,
      },
    );
    // After updating the array, save it to localStorage and call showscorelist function to
    //  show new list on screen
    localStorage.setItem('scorelist', JSON.stringify(scorelist));
  } showscorelist(JSON.parse(localStorage.getItem('scorelist')));
};

export default add;