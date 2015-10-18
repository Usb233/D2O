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
			case 1:
				/*open*/
				$(this).css("transform", "rotate(180deg)");
				$(this).next().slideDown(350, 'easeInOutQuart');
				$(this).prev().css("margin", "27px 0px 17px 0px")
				break;
			case 2:
				/*close*/
				$(this).css("transform", "rotate(0deg)");
				$(this).next().slideUp(350, 'easeInOutSine');
				$(this).prev().css("margin", "35px 0px 8px 0px")
				break;
		}
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
	function calc() {
		iC = $(".iC").val();
		iV = $(".iV").val();
		iX = $(".iX").val();
		iY = $(".iY").val();
		$(".C-num").val(iX * iY);  

		mmcCapacitance = iCap / perString * numOfStrings;
		mmcCapacitance = mmcCapacitance * 10e+3;
		mmcCapacitance = parseInt(mmcCapacitance);
		mmcCapacitance = mmcCapacitance / 10e+3;
		document.home.nc.nc1.nc2.mmccalc.mmcCapacitance.value = mmcCapacitance;
		mmcVoltage = iVoltage * perString;
		document.home.nc.nc1.nc2.mmccalc.mmcVoltage.value = mmcVoltage;
	}

	function perStringUp() {
		perString = document.home.nc.nc1.nc2.mmccalc.perString.value;
		perString = perString * 1 + 1;
		document.home.nc.nc1.nc2.mmccalc.perString.value = perString;
		calc();
	}

	function perStringDown() {
		perString = document.home.nc.nc1.nc2.mmccalc.perString.value;
		perString = perString * 1 - 1;
		if (perString * 1 < 1) perString = 1;
		document.home.nc.nc1.nc2.mmccalc.perString.value = perString;
		calc();
	}

	function numOfStringsUp() {
		numOfStrings = document.home.nc.nc1.nc2.mmccalc.numOfStrings.value;
		numOfStrings = numOfStrings * 1 + 1;
		document.home.nc.nc1.nc2.mmccalc.numOfStrings.value = numOfStrings;
		calc();
	}

	function numOfStringsDown() {
		numOfStrings = document.home.nc.nc1.nc2.mmccalc.numOfStrings.value;
		numOfStrings = numOfStrings * 1 - 1;
		if (numOfStrings * 1 < 1) numOfStrings = 1;
		document.home.nc.nc1.nc2.mmccalc.numOfStrings.value = numOfStrings;
		calc();
	}  
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
		/*$(".img-title").css("top", "-55px");*/
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