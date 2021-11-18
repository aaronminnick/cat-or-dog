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
    $('#image-area').show();
  } else {
    $('#wait-message').show();
  }
});

$('#cat-button').on('click', () => {
  let currImg = $(`#image${game.counter}`);
  if (currImg.prop('class') === "cat") {
    game.score += 1;
  }
  game.counter += 1;
  currImg.hide();
  currImg.next().show();
  $('#score-area').html(`<p>Score: ${game.score}</p>`);
});

$('#dog-button').on('click', () => {
  let currImg = $(`#image${game.counter}`);
  if (currImg.prop('class') === "dog") {
    game.score += 1;
  }
  game.counter += 1;
  currImg.hide();
  currImg.next().show();
  $('#score-area').html(`<p>Score: ${game.score}</p>`);
});
