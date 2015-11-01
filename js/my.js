/*顶栏*/
$(document).ready(function() {
	$(document).bind("scroll", function() {
		if ($(window).scrollTop() <= 210) {
			$(".menu").css({
				"position": "absolute",
				"top": "210px",
			});
		} else {
			$(".menu").css({
				"position": "fixed",
				"top": "0px",
			});
		}
	});
});

/*顶栏超链接*/
$(document).ready(function() {
	$(".about").fadeOut(0);
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
			setTimeout(function(){$(".about").fadeIn(250)},100)
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
		$(".about").fadeOut(100);
	});
});

/*主页*/
/*$(document).ready(function() {
	$(".home").hide(0);
	$(".LP > .lazyload").load(function() {
		$(".home").show(0);
	});
});*/

/*卡片开关*/
$(document).ready(function() {
	var a = 0;
	$(".toggle").slideUp(0);
	$(".show-ic").click(function() {
		a++;
		if (a > 2) {
			a = 1
		};
		switch (a) {
			/*(this为.show-ic)*/
			case 1:
				/*open*/
				$(this).css("transform", "rotate(180deg)");
				$(this).next().slideDown(350, 'easeInOutQuart');
				$(this).prev().css({"margin":"27px 0px 10px 0px","font-size":"22px"});
				$(this).parent().parent().css("box-shadow", "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)");
				break;
			case 2:
				/*close*/
				$(this).css("transform", "rotate(0deg)");
				$(this).next().slideUp(350, 'easeInOutSine');
				$(this).prev().css({"margin":"35px 0px 8px 0px","font-size":"23px"});
				$(this).parent().parent().css("box-shadow", "0 1px 1.5px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24)");
				break;
		}
	});
	$(".show-ic").click(function() {
		$(this).css("background-color", "#F2F2F2");
		setTimeout(function() {
			$(".show-ic").css("background-color", "#fff")
		}, 600)
	});
});

/*lp计算*/
$(document).ready(function() {
	$(".length").change(function() {
		$(".power").val(parseInt(($(".length").val() / 1.7) * ($(".length").val() / 1.7)));
	});

	$(".power").change(function() {
		$(".length").val(parseInt(1.7 * Math.sqrt($(".power").val())));
	});
});

/*zc计算*/
$(document).ready(function() {
	$("form:eq(1)").change(function() {
		var FL = $(":checked").val();
		var E = $("form:eq(1)").find("input:eq(2)").val();
		var I = $("form:eq(1)").find("input:eq(3)").val() / 1000;
		var Z = E / I;
		var C = 1000000 / (6.2832 * Z * FL);
		$("form:eq(1)").find("input:eq(4)").val(C.toFixed(4));
	});
});

/*LC计算*/
$(document).ready(function() {
	$(".l").change(function() {
		var l = $(".l").val();
		var c = $(".c").val();
		var f = $(".f").val();
		var f_re = 1 / (6.28318 * Math.sqrt(l * c));
		$(".f").val(f_re.toFixed(3));
	});
	$(".c").change(function() {
		var l = $(".l").val();
		var c = $(".c").val();
		var f = $(".f").val();
		var f_re = 1 / (6.28318 * Math.sqrt(l * c));
		$(".f").val(f_re.toFixed(3));
	});
});

/*NC计算*/
$(document).ready(function() {
	$(".NC>form>.toggle>input").change(function() {
		iC = $(".iC").val();
		iV = $(".iV").val();
		iX = $(".iX").val();
		iY = $(".iY").val();
		$(".C-num").val(iX * iY);  
		$(".re-C").val( ( (iC/iX)*iY ).toFixed(4) );
		$(".re-V").val( iV*iX ) ;

    });
});

/*CC计算*/
$(document).ready(function() {
	$("div").click(
	function(){
	u = $(".UN").children(":selected").val()
	d = $(".D").val() * u
	a = ($(".L").val() * u) * (($(".L").val() * u))
	n = $(".N").val()
	dc = $(".DC").children(":selected").val()
	c = ((8.85e-12 * dc * a) / d) * (n - 1)
	c *= 1e+12
	c = parseInt(c) / 1e+6
	$(".C").val(c)
  })
});

/*检测平台、设备和操作系统*/
$(document).ready(function() {
	var system = {
		win: false,
		mac: false,
		xll: false,
		ipad: false
	};
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
	if (system.win || system.mac || system.xll || system.ipad) {} else {
		//Android优化
		/*$(".img-title").css("top", "-53px");*/
		$("h1").css("font-size", "40px")
	};
});

/*卡片自适应居中*/
$(document).ready(function() {
	var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var pad1 = (winWidth - 316) / 2;
	var pad2 = (winWidth - 632) / 2;
	var pad3 = (winWidth - 948) / 2;
	if (winWidth < 316) {}
	$(".home").css("padding-left", pad1);
	if (winWidth < 632) {}
	$(".home").css("padding-left", pad2);
	if (winWidth < 948) {}
	$(".home").css("padding-left", pad3);
	/*改变尺寸*/
	$(window).resize(function() {
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var pad1 = (winWidth - 316) / 2;
		var pad2 = (winWidth - 632) / 2;
		var pad3 = (winWidth - 948) / 2;
		if (winWidth < 316) {}
		$(".home").css("padding-left", pad1);
		if (winWidth < 632) {}
		$(".home").css("padding-left", pad2);
		if (winWidth < 948) {}
		$(".home").css("padding-left", pad3);
	});
});