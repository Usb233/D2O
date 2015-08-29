/* 计算模块 */
$(document).ready(function() {
  
  var i=0;
  $(".hide").css("display", "none");
  $(".open-card").click(function() {
    $(".hide").slideToggle(400);
    i++;
    if (i>2) {i=1};
    switch(i){
      case 1:$(".lc-card > .ic").css('transform', 'rotate(180deg)');break;
      case 2:$(".lc-card > .ic").css('transform', 'rotate(0deg)');break;
  };
});

  $(".btn-lc").click(function calculatef() {
    var f = 0;
    f = 1 / (2 * 3.14159 * Math.sqrt(document.lc.l.value * document.lc.c.value * 1e-9));
    f = parseInt(f);
    f = f / 1e+3;
    document.lc.f.value = f;
  });

});
/* 计算模块-end */