import $ from 'jquery';
import Game from './js/game';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const game = new Game(20, $('#image-area'));

$('#start-button').on('click', () => {
  if (game.loaded === true) {
    $('#play-buttons-area').show();
    $('#image0').show();
    $('#start-button-area').hide();
    $('#wait-message').hide();
    $('#game-area').show();
    $('#score-area').html(`<h4>Score: ${game.score}</h4>`);
    $('#current-round-area').html(`<h4>Round: ${game.counter + 1} / ${game.images.size}`);
    game.pointsByTime();
  } else {
    $('#wait-message').show();
  }
});

$('#play-buttons-area').on('click', 'button', function() {
  if (game.inputAllowed) {
    game.inputAllowed = false;
    let currImg = $(`#image${game.counter}`);
    if (($(this).prop('id') === 'cat-button' && currImg.prop('class') === "cat") || ($(this).prop('id') === 'dog-button' && currImg.prop('class') === "dog")) {
      if ($(this).prop('id') === 'cat-button') {
        answerResponse($('#right-answer-cat'));
      } else {
        answerResponse($('#right-answer-dog'));
      }
      game.score += game.pointsByTime();
      game.correctTracker += 1;
    } else {
      if ($(this).prop('id') === 'cat-button') {
        answerResponse($('#wrong-answer-dog'));
      } else {
        answerResponse($('#wrong-answer-cat'));
      }
      game.pointsByTime();
    }
    currImg.css('animation-duration', '.1s');
    currImg.fadeOut(250);
    if (game.counter === game.images.size-1) {
      $('#score-area').html(`
        <h4>Final Score: ${game.score} / ${game.images.size * 5}</h4>
        <h4>Correct Guesses: ${game.correctTracker} / ${game.images.size}</h4>
        `);
      $('#score-area').css('margin-top', '35vh');
      $('#score-area').fadeToggle(0).delay(250).fadeIn(250);
      $('#current-round-area').hide();
      $('#play-buttons-area').hide();
      $('#play-again-area').show();
    } else {
      game.counter += 1;
      currImg.next().delay(270).fadeIn(0, () => game.inputAllowed = true);
      $('#score-area').html(`<h4>Score: ${game.score}</h4>`);
      $('#current-round-area').html(`<h4>Round: ${game.counter + 1} / ${game.images.size}`);
    }
  }
});

$('#play-again').on('click', () => {
  location.reload();
});

function answerResponse(answerDiv) {
  answerDiv.fadeToggle(5).delay(200).fadeToggle(50);
}