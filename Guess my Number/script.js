'use strict';

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// refractor .message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('Enter a number between 1 and 20');

    // when guess is correct
  } else if (guess === hiddenNumber) {
    displayMessage('🥳 Congratulations. You guessed it right! 👏');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').style.color = '#fff';

    // when guess is too high/low
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is incorrect
  } else if (guess !== hiddenNumber) {
    if (score > 1) {
      displayMessage(
        guess > hiddenNumber
          ? 'Your guess is too high!'
          : 'Your guess is too low!',
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Game Over! Please restart...');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#f75757';
      document.querySelector('.message').style.color = '#ffff00';
    }
  }
});
// return to default when 'play again' is clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Type a number between 1 and 20');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#fff0d1';
  document.querySelector('.message').style.color = '#333';
});
