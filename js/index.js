/***
 *      ________  _________
 *     / ___/ _ \/ __/ ___/
 *    / (_ / , _/ _// (_ / 
 *    \___/_/|_/___/\___/  
 *
 *    2018
 *    ∆
 *    Gregory P. Evans 
 *    greg.peter.evans@gmail.com
 *
 */


/********************************************************************
                          Loading GIF
********************************************************************/
/*
$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});
*/



/********************************************************************
                      Accordian
********************************************************************/

// slideToggle() in a stack 

$(document).ready(function(){

// start with all boxes hidden
$('.box').hide();
    
// make each gray bar open a certain box 
$('.ect').on('click', function() {
    $('.one').slideToggle('fast');
});

});



/********************************************************************
                      Menu OVERLAY
********************************************************************/

$(document).ready(function(){
$('.the-dot').click(function(){
    $(this).toggleClass('open');
    $('.menu-overlay').toggleClass('open');
 });
});







