(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    
    $('#easy').click(startEasy);
    $('#med').click(startMed);
    $('#hard').click(startHigh);

    $('.name').click(nameGuess);
    $('.icon').click(flagGuess);
    $('#match').click(checkMatch);
  }
  //--------globals----------//
  var timer, flagHome, nameHome;
  var start = 1000; //start of timer on easy mode
  var success = 0; //used to calculate when game is won

  //-------Select Difficulty--------//

  function startEasy(event){
    event.preventDefault();
    start = 1000;
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

  //--------start game-------//

  function startTimer(){
    $('#startButtons').hide();
    $('h3').hide();
    $('#timer').fadeIn();
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

  //---------Guesses Picked-------------//

  function nameGuess(){
    nameHome = $(this).parent();
    var guess = $(this);
    $('#nameMatch').append(guess);
  }

  function flagGuess(){
    flagHome = $(this).parent();
    var guess = $(this);
    $('#flagMatch').append(guess);
  }

  function checkMatch(){
    var $nameGuess = $('#nameMatch').children(':first');
    var $flagGuess = $('#flagMatch').children(':first');

    var countryName = $nameGuess.text();
    var flagCode = $flagGuess.attr('class');
    flagCode = flagCode.slice(15,17);

    //var url = '/flag';
    var data = {countryName: countryName, flagCode: flagCode};
    $.getJSON('/flag', data, matchResponse);

    function matchResponse(response){
      console.log(response);
      var bool = response.match;
      bool =!!bool;
      if(bool){
        alert('match');

      }else{

        //IF NO MATCH//
        nameHome.append($nameGuess);
        flagHome.append($flagGuess);
      }
    }



  }




})();

