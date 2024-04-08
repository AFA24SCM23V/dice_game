'use strict';
const score01el = document.querySelector('#score--0');
const score02el = document.querySelector('#score--1');
const diceel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0el = document.querySelector('#current--0');
const current1el = document.querySelector('#current--1');
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const currentblock = document.querySelectorAll('.current');
const player0 = document.getElementById('name--0');
const player1 = document.getElementById('name--1');
const scores = [0, 0];
player0.textContent = 'PLAYER 1';
player1.textContent = 'PLAYER 2';
let currentscore = 0;
let activeplayer = 0;
let playing = true;
score01el.textContent = '0';
score02el.textContent = '0';
diceel.classList.add('hidden');

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;

    if (dice !== 1) {
      //add dice vaue to current score
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      //switch player
      switchplayer();
    }
  }
});

// btnNew.addEventListener('click', function () {
//   location.reload();
// });

btnNew.addEventListener('click', function () {
  playing = true;
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--winner');
  player0el.classList.add('player--active');
  player1el.classList.remove('player--active');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  diceel.classList.add('hidden');
  currentblock.forEach(block => block.classList.remove('hidden'));
  currentscore = 0;
  activeplayer = 0;
  player0.textContent = 'PLAYER 1';
  player1.textContent = 'PLAYER 2';
  score01el.textContent = '0';
  score02el.textContent = '0';
  current0el.textContent = '0';
  current1el.textContent = '0';
  scores[0] = 0; // Reset player 1 score
  scores[1] = 0; // Reset player 2 score
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 100) {
      playing = false;

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      if (activeplayer == 0) {
        player0.textContent = `PLAYER 1🎉`;
      } else {
        player1.textContent = `PLAYER 2🎉`;
      }

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
      diceel.classList.add('hidden');
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
      currentblock.forEach(block => block.classList.add('hidden'));
    }
    switchplayer();
  }
});
