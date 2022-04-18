'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

let disPlayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  //we use Number() method. bc we will always get the input value
  //from a user as type of string. later we need to compare 2 numbes.
  //so we use Number() method
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    disPlayMessage('👿 NO NUMBER!');
  } else if (guess === secretNumber) {
    disPlayMessage('🎊 Correct NUMBER!');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      disPlayMessage(guess > secretNumber ? '😱 TOO HIGHT!' : '😱 TOO LOW!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d72525';
      disPlayMessage('😭 You Lose The Game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  disPlayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
