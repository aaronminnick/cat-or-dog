import $ from 'jquery';
import Game from './js/game';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const game = new Game(10, $('#image-area'));

$('#start-button').on('click', () => {
  if (game.loaded === true) {
    $('#play-buttons-area').show();
    $('#image0').show();
    $('#start-button').hide();
    $('#wait-message').hide();
    $('#game-area').show();
    $('#score-area').html(`<p>Score: ${game.score}</p>`);
    game.pointsByTime();
  } else {
    $('#wait-message').show();
  }
});

$('#play-buttons-area').on('click', 'button', function() {
  let currImg = $(`#image${game.counter}`);
  if (($(this).prop('id') === 'cat-button' && currImg.prop('class') === "cat") || ($(this).prop('id') === 'dog-button' && currImg.prop('class') === "dog")) {
    game.score += game.pointsByTime();
  } else {
    game.pointsByTime();
  }
  game.counter += 1;
  currImg.hide();
  currImg.next().show();
  $('#score-area').html(`<p>Score: ${game.score}</p>`);
});
