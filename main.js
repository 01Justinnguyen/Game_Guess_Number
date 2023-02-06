'use strict';

const button = document.querySelector('.btn.check');
const buttonAgain = document.querySelector('.btn.again');

const randomNumber = Math.floor(Math.random() * 100 + 1);

// console.log(randomNumber);
let yourTurn = document.querySelector('.label-turn span');
let turn = 7;

buttonAgain.addEventListener('click', () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = '';
  turn = 7;
  yourTurn.textContent = '7';
  button.style.display = 'block';
});

button.addEventListener('click', () => {
  const result = document.querySelector('.guess').value;

  if (Number(result) < 1 || Number(result) > 100) {
    document.querySelector('.message').textContent =
      'Làm ơn nhập số lớn hơn 1 và bé hơn 0';
  } else if (Number(result) === randomNumber) {
    document.querySelector('.message').textContent = 'Congratulations🎉🎉🎉';
    document.querySelector('.number').textContent = `${randomNumber}`;
    button.style.display = 'none';
  } else if (Number(result) < randomNumber) {
    document.querySelector('.message').textContent = 'Bé hơn mất rồi';
    turn = turn - 1;
    yourTurn.innerHTML = `${turn}`;
    if (turn === 0) {
      document.querySelector('.message').textContent = 'Đồ thất bại!!! Get out';
      button.style.display = 'none';
    }
  } else {
    document.querySelector('.message').textContent = 'Lớn hơn mất rồi';
    turn = turn - 1;
    yourTurn.innerHTML = `${turn}`;
    if (turn === 0) {
      document.querySelector('.message').textContent = 'Đồ thất bại!!! Get out';
      button.style.display = 'none';
    }
  }
});
