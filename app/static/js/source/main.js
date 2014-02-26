(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('.name').click(nameGuess);
    $('.icon').click(flagGuess);
    $('#easy').click(startEasy);
    $('#med').click(startMed);
    $('#hard').click(startHigh);
  }
  //--------globals----------//
  var timer;
  var start = 1000;

  //-------start game--------//

  function startEasy(event){
    event.preventDefault();
    start = 40;
    startTimer();
  }

  function startMed(event){
    event.preventDefault();
    start = 20;
    startTimer();
  }

  function startHigh(event){
    event.preventDefault();
    start = 10;
    startTimer();
  }

  //--------start timer-------//

  function startTimer(){
    $('#namesWrapper, #flagsWrapper, #matchWrapper').fadeIn('fast');
    
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

  function nameGuess(){

  }

  function flagGuess(){

  }



})();

