$(document).ready(function() {
	/*顶栏*/
	$(document).bind("scroll", function() {
		if ($(window).scrollTop() <= 240) {
			$(".menu").css({
		    "position":"static",
			});
		    $("h1").css({
			"margin-bottom":"0px",
		    });
		} 
		else {
			$(".menu").css({
			"position": "fixed",
			"top": "0px",
			});
			$("h1").css({
			"margin-bottom":"80px",
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
});