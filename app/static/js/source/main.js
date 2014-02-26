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
  var start = 1000;
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
        $('#timer').css('color', 'red');
      }
    }else{
      clearInterval(timer);
      $('button, div').fadeOut();
      $('.lowTime').fadeIn(2000);
      $('.fail').fadeIn(5000);
      $('.lowTime').text('YOU LOSE');
      $('.lowTime').css('font-size', '10em').fadeIn('slow');
      $('.lowTime').css('z-index', '100');
      $('.lowTime').css('color', 'red');
      $('.lowTime').css('left', '20%');
      $('body').addClass('skull');
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



})();

