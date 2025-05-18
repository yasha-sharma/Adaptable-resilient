'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const Current0El = document.getElementById('current--0');
const Current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let playing, activePlayer, currentScore, scores;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  Current0El.textContent = 0;
  Current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling the dice
// 1. roll dice - generate random number.
btnroll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice with number on it.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. add score to current score.
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
  //4. if number is 1 switch to next player.
});

btnhold.addEventListener('click', function () {
  if (playing) {
    //1. stores the current score to total score.
    //scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if score >=100
    //player wins and game finishes

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch next player
      switchPlayer();
    }
  }
});

btnnew.addEventListener('click', init);
