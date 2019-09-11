
//Initializer
function init(){


$(document).ready(function(){

  $('.jadwal').hide();

  //show first question
  $('#1').show();

  $('#1 #Tue').click(function(){
    $('.jadwal').hide()
    $('#2').fadeIn(300);
    return false;
  });

  $('#1 #Fri').click(function(){
    $('.jadwal').hide()
    $('#3').fadeIn(300);
    return false;
  });

  $('#1 #Sat').click(function(){
    $('.jadwal').hide()
    $('#4').fadeIn(300);
    return false;
  });

  /*-------------*/

  $('#2 #Sun').click(function(){
    $('.jadwal').hide()
    $('#1').fadeIn(300);
    return false;
  });

  $('#2 #Fri').click(function(){
    $('.jadwal').hide()
    $('#3').fadeIn(300);
    return false;
  });

  $('#2 #Sat').click(function(){
    $('.jadwal').hide()
    $('#4').fadeIn(300);
    return false;
  });

  /*-------------*/

  $('#3 #Sun').click(function(){
    $('.jadwal').hide()
    $('#1').fadeIn(300);
    return false;
  });

  $('#3 #Tue').click(function(){
    $('.jadwal').hide()
    $('#2').fadeIn(300);
    return false;
  });

  $('#3 #Sat').click(function(){
    $('.jadwal').hide()
    $('#4').fadeIn(300);
    return false;
  });

  /*-------------*/

  $('#4 #Sun').click(function(){
    $('.jadwal').hide()
    $('#1').fadeIn(300);
    return false;
  });

  $('#4 #Tue').click(function(){
    $('.jadwal').hide()
    $('#2').fadeIn(300);
    return false;
  });

  $('#4 #Fri').click(function(){
    $('.jadwal').hide()
    $('#3').fadeIn(300);
    return false;
  });



});

  };
};
//add event listener
window.addEventListener('load',init,false);
