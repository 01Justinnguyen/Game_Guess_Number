'use strict';

const $ = document.querySelector.bind(document);

const bodyElement = $('body');
const button = $('.btn.check');
const buttonAgain = $('.btn.again');
let randomNumber = Math.floor(Math.random() * 100 + 1);
let yourTurn = $('.label-turn span');
let yourScore = $('.label-score span');
let turn = 7;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  $('.message').textContent = message;
};

buttonAgain.addEventListener('click', () => {
  displayMessage('Start guessing...');
  $('.number').textContent = `?`;
  $('.guess').value = '';
  turn = 7;
  score = 10;
  yourTurn.textContent = '7';
  yourScore.textContent = '10';
  button.style.display = 'block';
  bodyElement.style.backgroundColor = '#222';
  $('.number').style.width = '15rem';
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
});

button.addEventListener('click', () => {
  const result = $('.guess').value;

  if (Number(result) < 1 || Number(result) > 100) {
    displayMessage('Làm ơn nhập số lớn hơn 1 và bé hơn 0');
  } else if (Number(result) === randomNumber) {
    displayMessage('Congratulations🎉🎉🎉');
    $('.number').textContent = `${randomNumber}`;
    button.style.display = 'none';
    bodyElement.style.backgroundColor = '#60b347';
    $('.number').style.width = '25rem';
    if (score > highscore) {
      highscore = score;
      $('.highscore').textContent = highscore;
    }
  } else {
    if (Number(result) !== randomNumber) {
      displayMessage(
        Number(result) > randomNumber ? 'Lớn hơn mất rồi' : 'Bé hơn mất rồi'
      );
      turn--;
      score--;
      $('.label-score .score').textContent = `${score}`;
      yourTurn.innerHTML = `${turn}`;
      if (turn === 0) {
        displayMessage('Đồ thất bại!!! Get out');
        button.style.display = 'none';
        bodyElement.style.backgroundColor = 'red';
      }
    }
  }
});
