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
  	case 1:/*open*/
  	$(this).css("transform","rotate(180deg)");
  	$(this).next().slideDown(350,'easeInOutQuart');
  	$(this).prev().css("margin","48px 0px 20px 0px")
  	break;
  	case 2:/*close*/
  	$(this).css("transform","rotate(0deg)");
    $(this).next().slideUp(350,'easeInOutSine');
    $(this).prev().css("margin","60px 0px 10px 0px")
  	break;
    } 	
  });

/*lp计算*/
	$(".length").change(function() {
	   $(".power").val(parseInt(($(".length").val() / 1.7) * ($(".length").val() / 1.7)));
	});

	$(".power").change(function() {
		$(".length").val(parseInt(1.7 * Math.sqrt($(".power").val())));
	});

/*zc计算*/
      
      $("form:eq(1)").change(function() {
      var FL = $(":checked").val();
      var E = $("form:eq(1)").find("input:eq(2)").val();
      var I = $("form:eq(1)").find("input:eq(3)").val()/1000;
      var Z = E/I;
      var C = 1000000/(6.2832*Z*FL);
      $("form:eq(1)").find("input:eq(4)").val(C.toFixed(4));
      });



//检测平台、设备和操作系统
	var system = {
		win: false,
		mac: false,
		xll: false,
		ipad: false
	};
	//检测平台
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
	//跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面
	if (system.win || system.mac || system.xll || system.ipad) {} else {
		$(".img-title").css("top", "-55px")
	};

});

