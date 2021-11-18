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
  } else {
    $('#wait-message').show();
  }
});


$('#score-area').html(`<p>${game.score}</p>`);
