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
    $('#replay').click(restartGame);
  }
  //--------globals----------//
  var timer, flagHome, nameHome;
  var start = 0; //timer display
  var success = 0; //used to calculate when game is won

  //-------Select Difficulty--------//

  function startEasy(event){
    event.preventDefault();
    start = 35;
    startTimer();
  }

  function startMed(event){
    event.preventDefault();
    start = 25;
    startTimer();
  }

  function startHigh(event){
    event.preventDefault();
    start = 12;
    startTimer();
  }

  //--------start game-------//

  function startTimer(){
    $('#startButtons').hide();
    $('h3').hide();
    $('#gifWrapper').hide();
    $('#timer').fadeIn();
    $('#namesWrapper, #flagsWrapper, #matchWrapper').fadeIn('fast');
    
    timer = setInterval(timerCounter,1000);
  }

  function timerCounter(){
    //timer still ticking
    if(start !== 0){
      start--;
      $('#timer').text(start);
      if(start < 11){
        $('.lowTime').text(start);
        $('.lowTime').fadeIn('fast').fadeOut('slow');
        $('#timer').css('color', 'red');
      }
    }else{
     //timer runs out
      clearInterval(timer);
      $('button, div').fadeOut();
      $('.lowTime').fadeIn(2000);
      $('.fail').fadeIn(5000);
      $('#replay').fadeIn(6000);
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

    var data = {countryName: countryName, flagCode: flagCode};
    $.getJSON('/flag', data, matchResponse);

    function matchResponse(response){
      //response will be true, if node found a match
      //and false if it didnt
      var bool = response.match;
      bool =!!bool; //convert string to bool
      if(bool){

        //IF MATCH

        $nameGuess.remove();
        $flagGuess.remove();
        success++;
        if(success > 4){ //End of game
          clearInterval(timer);
          alert('Youve Won!');
        }
      }else{

        //IF NO MATCH//
        nameHome.append($nameGuess);
        flagHome.append($flagGuess);
      }
    }
  }
//-------------RESTART-GAME---------------//
  function restartGame(){
    location.reload(true);
  }





})();

