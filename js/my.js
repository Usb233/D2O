$(document).ready(function() {
/*顶栏*/
	$(document).bind("scroll", function() {
		if ($(window).scrollTop() <= 210) {
			$(".menu").css({
			"position": "absolute",
			"top": "210px",
			});
		} 
		else {
			$(".menu").css({
			"position": "fixed",
			"top": "0px",
			});
		}
	});
    
/*顶栏超链接*/
	$(".menu>li:eq(0)>a").css({
		"border-bottom": "solid #fff 3px"
	});
      /*关于*/
	$(".menu>li:eq(1)>a").click(function() {
		$(this).css({
			"border-bottom": "solid #fff 3px"
		});
		$(".menu>li:eq(0)>a").css({
			"border-bottom-width": "0px",
		});
		$(".card").fadeOut(100);
	})
	  /*首页*/
	$(".menu>li:eq(0)>a").click(function() {
		$(this).css({
			"border-bottom": "solid #fff 3px"
		});
		$(".menu>li:eq(1)>a").css({
			"border-bottom-width": "0px",
		});
		$(".card").fadeIn(100);
	});

/*卡片开关*/
  var a=0;
  $(".toggle").slideUp(0);
  $(".show-ic").click(function(){
    a++; if (a>2) {a=1};
  	switch (a){
  	case 1:
  	$(this).css("transform","rotate(180deg)");
  	$(this).next().slideDown(350,'easeInOutQuart');
  	break;
  	case 2:
  	$(this).css("transform","rotate(0deg)");
    $(this).next().slideUp(350,'easeInOutSine');
  	break;
    } 	
  });


});

