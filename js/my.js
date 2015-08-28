/*计算模块*/

$(document).ready(function() {
    $(".js-disable").css("display","none");
    $(".open").click(function(){
    $(".js-disable").slideToggle(450);
  });
});


$(document).ready(function() {
  $(".btn-lc").click(function calculatef() {
    var f = 0;
    f = 1 / (2 * 3.14159 * Math.sqrt(document.lc.l.value * document.lc.c.value * 1e-9));
    f = parseInt(f);
    f = f / 1e+3;
    document.lc.f.value = f;
  });
});
/*/计算模块*/

$(document).ready(function() {
  var isMenuOpen = false;
  $('.menu_btn').click(function() {
    if (isMenuOpen == false) {
      $("#menu_smartphone").clearQueue().animate({
        left: '0px'
      });
      $("#grey_back").fadeIn('fast');
      $(this).fadeOut(200);
      $(".close").fadeIn(300);


      isMenuOpen = true;
    }
  });

  $('#grey_back').click(function() {
    if (isMenuOpen == true) {
      $("#menu_smartphone").clearQueue().animate({
        left: '-80%'
      });
      $("#page").clearQueue().animate({
        "margin-left": '0px'
      });
      $("#grey_back").fadeOut('fast');
      $(this).fadeOut(200);
      $(".menu_btn").fadeIn(300);
      isMenuOpen = false;
    }
  });
});