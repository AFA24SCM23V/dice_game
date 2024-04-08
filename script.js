'use strict';

let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Oops!! No number';
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = 'green';
    let message = '😎 Correct Number!!';
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = message;
    document.querySelector('.score').textContent = score;
    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else {
    score--;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'black';
    if (guess > number) {
      document.querySelector('.message').textContent = 'Too high!!';
    } else if (guess < number) {
      document.querySelector('.message').textContent = 'Too Low!!';
    }
  }

  if (score < 1) {
    document.querySelector('.score').textContent = '0';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.message').textContent = 'You lose!!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
