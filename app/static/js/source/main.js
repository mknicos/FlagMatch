(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    startTimer();
    $('.name').click(Guess);
    $('.icon').click(Guess);
  }
  var timer;
  var start = 15;
  var prevGuess;

  function startTimer(){
    timer = setInterval(timerCounter,1000);
  }

  function timerCounter(){
    if(start !== 0){
      start--;
      $('#timer').text(start);
      if(start < 11){
        $('.lowTime').text(start);
        $('.lowTime').fadeIn('fast').fadeOut('slow');
      }
    }else{
      clearInterval(timer);
      $('.lowTime').text('YOU SUCK');
      $('.lowTime').css('font-size', '25em').fadeIn('slow');
      $('body').css('background-color', 'black');
    }
  }

  function Guess(){
    var currentGuess = $(this).data('id');
    if(currentGuess === prevGuess){
      $('div[data-id="'+currentGuess+'"]').hide();
    }else{
      prevGuess = currentGuess;
    }
  }

/*
  function Guess(){
    iconGuess = $(this).data('id');
    if(nameGuess === iconGuess){
      //$(this).hide();
      $('div[data-id="'+iconGuess+'"]').hide();
    }
  }
*/



})();

