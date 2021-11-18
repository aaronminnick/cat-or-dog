import $ from 'jquery';
import Game from './js/game';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const game = new Game(10);

$('#image0').show();
$('#score-area').html(`<p>${game.score}</p>`);