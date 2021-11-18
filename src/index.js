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
    $('#score-area').html(`<h5>Score: ${game.score}</h5>`);
    game.pointsByTime();
  } else {
    $('#wait-message').show();
  }
});

$('#play-buttons-area').on('click', 'button', function() {
  let currImg = $(`#image${game.counter}`);
  if (($(this).prop('id') === 'cat-button' && currImg.prop('class') === "cat") || ($(this).prop('id') === 'dog-button' && currImg.prop('class') === "dog")) {
    game.score += game.pointsByTime();
    game.correctTracker += 1;
  } else {
    game.pointsByTime();
  }
    currImg.hide();
  if (game.counter === game.images.size-1) {
    $('#score-area').html(`
      <h4>Final Score: ${game.score} / ${game.images.size * 5}</h4>
      <h4>Correct Guesses: ${game.correctTracker} / ${game.images.size}</h4>
      `);
    $('#score-area').css('margin-top', '35vh');
    $('#play-buttons-area').hide();
    $('#play-again-area').show();
  } else {
  game.counter += 1;
  currImg.next().show();
  $('#score-area').html(`<h4>Score: ${game.score}</h4>`);
  }
});

$('#play-again').on('click', () => {
  location.reload();
});
