import $ from 'jquery';
import APIService from "./apiService";

APIService.getDog()
  .then(function(dog) {
    console.log(dog);
    $('#demo').prop('src', dog.url);
  });
