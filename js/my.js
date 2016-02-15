//the small refers to any device screen width <=380px :)

/*initial*/
$(document).ready(function() {
	setTimeout(function() {
		$("#bg").fadeOut(280);
		$("#spinner").fadeOut(280);
		$("body").css({
			"overflow": "visible"
		});
	}, 500);
	//some bug fix in here~~
	var top = $(window).scrollTop();
	if (top > 0) {
		$("h1").css({
			"font-size": "26px"
		});
		$("h1").css({
			"top": "11px"
		});
	};
	if (top >= 210) {
		$(".top").css({
			"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
		});
	};



	/*top bar animation*/
	$(document).bind("scroll", function() {
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var top = $(window).scrollTop();
		console.log(top);
		var topH = $(".top").css("height"); /*top height*/
		var top_h = topH.substring(0, 2);
		var top_shadow = 210 - top_h;

		if (winWidth >= 380) {
			if ($(window).scrollTop() >= top_shadow || $("#back").css("display") == "block") {
				$(".top").css({
					"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
					/*"top": "210px",*/
				});
			} else {
				$(".top").css({
					"box-shadow": "",
					/*"top": "210px",*/
				});
			}
			h1Size = (3 / 2500) * top * top - (11 / 50) * top + 40; /*60/(top/60)*/
			h1Top = (-9 / 20) * top + 50;
			if (h1Size <= 26) {
				h1Size = 26;
			};
			if (h1Size >= 40) {
				h1Size = 40;
			};
			if (top >= 100) {
				h1Size = 26;
			};
			/*var winWidth0 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			if (winWidth0<=480) {if(h1Top<=7) {h1Top=7};}
			else {if(h1Top<=11) {h1Top=11};}*/
			if (h1Top <= 11) {
				h1Top = 11;
			};

			$("h1").css({
				"font-size": h1Size + "px"
			});
			$("h1").css({
				"top": h1Top + "px"
			});
		} else {
			$(".top").css({
				"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
				/*"top": "210px",*/
			});
		}

	});

	/*panel switch*/
	$("#back").hide();

	/*another panel*/
	$("#moreList").find("*").click(function() {
		$(".card").hide();
		$("h1").hide();

		$("#back").show();
		$("#moreIc").hide();

		if (top <= 10) {
			$(".top-bg").css({
				height: '60px'
			});
		} else {
			$(".top-bg").animate({
				height: '60px'
			}, 10);
		}

		if ($("#back").css("display") == "block") {
			$(".top").css({
				"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
			});
		};


	});

	/*exit another panel*/
	function exit() {
		$(".card").show();
		$("h1").show();
		$("#back").hide();
		$("#moreIc").show();
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (winWidth >= 380) {
			$(".top-bg").animate({
				height: '210px'
			}, 450, 'easeInOutCubic');
		} else {
			$(".top").css({
				"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
			});
		}

		if ($("#back").css("display") == "none") {
			$(".top").css({
				"box-shadow": "",
			});
		};

		var top = $(window).scrollTop();
		console.log(top);
		var topH = $(".top").css("height");
		var top_h = topH.substring(0, 2);
		var top_shadow = 210 - top_h;

		if ($(window).scrollTop() >= top_shadow || $("#back").css("display") == "block") {
			$(".top").css({
				"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
			});
		}
		/*window.location.reload();*/
	}

	$("#back").click(function() {
		exit();

	});


	/*top bar*/
	$("#moreList>*").css("opacity", "0");

	/*custom animation function*/
	function zoomOut(selector) {
		var n = 50;
		var intervalID = window.setInterval(myCallback, 13);

		function myCallback() {
			n = n - 7.7;
			if (n <= 2) {
				n = 2;
				window.clearInterval(intervalID);
			};
			$(selector).css("border-radius", n + "%");
		}
	}

	function zoomIn(selector) {
		var n = 2;
		var intervalID = window.setInterval(myCallback, 13);

		function myCallback() {
			n = n + 7.7;
			if (n >= 100) {
				n = 100;
				window.clearInterval(intervalID);
			};
			$(selector).css("border-radius", n + "%");
		}
	}

	function opacityOut(selector) {
		var op = 0;
		var intervalID = window.setInterval(myCallback, 13);

		function myCallback() {
			op = op + 5;
			if (op >= 100) {
				op = 100;
				window.clearInterval(intervalID);
			};
			$(selector).css("opacity", op / 100);
		}
	}

	function opacityIn(selector) {
		var op = 100;
		var intervalID = window.setInterval(myCallback, 13);

		function myCallback() {
			op = op - 35;
			if (op <= 0) {
				op = 0;
				window.clearInterval(intervalID);
			};
			$(selector).css("opacity", op / 100);
		}
	}

	$("#moreList").hide();
	$("#blank").hide();

	$("#moreIc").click(function() {
		$("#moreList").show(140);
		zoomOut("#moreList");
		setTimeout(function() {
			opacityOut("#moreList>*");
		}, 200);
		$("#blank").show();
	});

	$("#moreList").find("*").click(function() {
		$("#moreList").hide(140);
		zoomIn("#moreList");
		opacityIn("#moreList>*");
		$("#blank").hide();
	});

	$("#blank").mousedown(function() {
		$(this).hide();
		$("#moreList").hide(140);
		zoomIn("#moreList");
		opacityIn("#moreList>*");
	});

	$(document).bind("scroll", function() {
		$("#blank").hide();
		$("#moreList").hide(140);
		zoomIn("#moreList");
		opacityIn("#moreList>*");
	});


	/*setting*/
	// settingLi
	$("#settingLi").parent().click(function() {
		$(".set").css("display", "block");
		$("#h1Set").css("display", "block");
		location.hash = "setting";
	});

	$("#back").click(function() {
		$(".set").css("display", "none");
		$("#h1Set,#h1About,#h1Help").css("display", "none");
		location.hash = "home";
	});

	var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	$(".set>*>div").css("width", winWidth - 65 + "px");
	$(window).resize(function() {
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		$(".set>*>div").css("width", winWidth - 65 + "px");
	});

	//can't work in Android..
	/*$(".set > div").mousedown(function(){
	    $(this).css("background-color","#E0E0E0");
    });
	$(".set > div").mouseup(function(){
	    $(this).css("background-color","#fff");
    });*/

	//themeColor
	if (localStorage.themeColor) {
		$("#themeColorInput").val(localStorage.themeColor);
		themeColor = $("#themeColorInput").val();
		localStorage.themeColor = themeColor;
		$(".themecolor").attr("content", themeColor);
		$(".top").css("background-color", themeColor);
		$(".top-bg").css("background-color", themeColor);
		$(".radio .outer").css("border", "3px solid " + themeColor);
		$(".set > * > *>#themeColor").css('background-color', themeColor);
	}

	$("#themeColorInput").change(function() {
		themeColor = $("#themeColorInput").val();
		localStorage.themeColor = themeColor;
		$(".themecolor").attr("content", themeColor);
		$(".top").css("background-color", themeColor);
		$(".top-bg").css("background-color", themeColor);
		$(".radio .outer").css("border", "3px solid " + themeColor);
		$(".set > * > *>#themeColor").css('background-color', themeColor);
	});

	//secondColor
	if (localStorage.secondColor) {
		$("#secondColorInput").val(localStorage.secondColor);
		secondColor = $("#secondColorInput").val();
		localStorage.secondColor = secondColor;
		$(".radio .inner").css("background-color", secondColor);
		$("option").css("border", "1px solid " + secondColor);
		$(".settingTittle").css("color", secondColor);
		$(".set > * > *>#secondColor").css('background-color', secondColor);
		$("input").focus(function() {
			$(this).css("border-color", secondColor);
		});
		/*selection text css*/
		var styleSheet;
		styleSheet = document.styleSheets[1];
		styleSheet.deleteRule(0);
		styleSheet.insertRule("::selection" + "{" + "background:" + secondColor + "}", 0);
	}

	$("#secondColorInput").change(function() {
		secondColor = $("#secondColorInput").val();
		localStorage.secondColor = secondColor;
		$(".radio .inner").css("background-color", secondColor);
		$("option").css("border", "1px solid " + secondColor);
		$(".settingTittle").css("color", secondColor);
		$(".set > * > *>#secondColor").css('background-color', secondColor);
		$("input").focus(function() {
			$(this).css("border-color", secondColor);
		});
		/*selection text css*/
		var styleSheet;
		styleSheet = document.styleSheets[1];
		styleSheet.deleteRule(0);
		styleSheet.insertRule("::selection" + "{" + "background:" + secondColor + "}", 0);
	});

	//colorSelect click even
	$(".set > * > *>.colorSelect").click(function() {
		$(this).css({
			"border-radius": "0px",
			"height": "30px",
			"width": "100px",
			"background-color": "rgba(235, 235, 228, 0)",
			"top": "20px"
		});
		$(this).children().css("display", "block"); //show input
		//for small device
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (winWidth <= 400) {
			$(this).prev().fadeOut(260, 'easeInOutQuart');
			$(this).prev().prev().prev().animate({
				top: '16px'
			}, 280, 'easeInOutQuart');
		};
		//auto focus
		$(this).children().focus();
	});

	$(".colorSelect").children().blur(function() {
		$(this).parent().css({
			"border-radius": "100%",
			"height": "35px",
			"width": "35px",
			"top": "15px",
		});
		themeColor = $("#themeColorInput").val();
		secondColor = $("#secondColorInput").val();
		$(".set > * > *>#themeColor").css('background-color', themeColor);
		$(".set > * > *>#secondColor").css('background-color', secondColor);
		$(this).css("display", "none"); //hide input
		//for small device
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (winWidth <= 400) {
			$(this).parent().prev().prev().prev().animate({
				top: '8px'
			}, 280, 'easeInOutQuart');
			$(this).parent().prev().show(520, 'easeInOutQuart');
		}
	});

	//clearDate
	$("#clearDate").click(function() {
		var r = confirm("确定清除所有用户数据？\n注意:此操作不可逆");
		if (r == true) {
			localStorage.clear();
			window.location.reload();
		} else {}
	});

	//nightMode
	function night() {
		$("body, #moreList").css("background-color", "#303030");
		$(".card, .set, input").css("background-color", "#424242");
		$(".set > * > div, tr").css("border-bottom", "solid 1px #494949");
		$("hr").css("background-color", "#494948");
		$(".set > div:last-child > div").css("border-bottom", "none");
		$(".p2, label, .label, .form-span, input, th, td").css("color", "#c1c1c1");
		$("input").css("border-color", "#494949");
		if (localStorage.secondColor) {
			var secondColor = localStorage.secondColor;
		} else {
			var secondColor = "#f08b3b";
		}
		$("input").focus(function() {
			$(this).css("border-color", secondColor);
		});
		$("input").blur(function() {
			$(this).css("border-color", "#494949");
		});
		$("legend, #moreList>li>div, p").css("color", "#eee");
		$("#moreList>li").addClass("nightList");
	}

	function day() {
		$("body").css("background-color", "#eee");
		$(".card, .set,#moreList, input").css("background-color", "#fff");
		$(".set > * > div, tr").css("border-bottom", "solid 1px #E0E0E0");
		$("hr").css("background-color", "#d4d4d4");
		$(".set > div:last-child > div").css("border-bottom", "none");
		$("p").css("color", "#202020");
		$(".p2").css("color", "#737373");
		$("input").css("border-color", "#E0E0E0");
		if (localStorage.secondColor) {
			var secondColor = localStorage.secondColor;
		} else {
			var secondColor = "#f08b3b";
		}
		$("input").focus(function() {
			$(this).css("border-color", secondColor);
		});
		$("input").blur(function() {
			$(this).css("border-color", "#E0E0E0");
		});
		$("legend, #moreList>li>div, label, .label, .form-span, input, th, td").css("color", "#616161");
		$("#moreList>li").removeClass("nightList");
	}

	if (localStorage.nightMode == "yes") {
		$(".onoffswitch-checkbox").attr("checked", "ture");
		night();
	} else {
		$(".onoffswitch-checkbox").removeAttr("checked");
		day();
	}
	$("#myonoffswitch").click(function() {
		if (localStorage.nightMode != "yes") {
			localStorage.nightMode = "yes";
			night();
		} else {
			localStorage.nightMode = "no";
			day();
		}
	});

	//imgOpacity
	var opa = $("#opacityInput").val();
	$("#opacitySet").css("opacity", opa); /*背板透明度*/
	$("#opacitySet").children().blur(function() {
		opa = $("#opacityInput").val();
		if (opa <= 0.1) {
			opa = 0.1
		};
		if (opa >= 1) {
			opa = 1
		};
		$(this).parent().css("background-color", "#000");
		$(this).parent().css("opacity", opa); /*背板透明度*/
		$("#opacityInput").css("opacity", "1");
		$("#opacityInput").val(opa);

		localStorage.imgOpacity = opa;
		$(".card > img:first-child").css('opacity', opa);
		$(".img-title").css('opacity', opa - 0.5);
		$("legend").css('opacity', opa);
	});
	if (localStorage.imgOpacity) {
		opa = localStorage.imgOpacity;
		$(".card > img:first-child").css('opacity', opa);
		$(".img-title").css('opacity', opa - 0.5);
		$("legend").css('opacity', opa);
		$("#opacityInput").val(opa)
	};


	/*about*/
	// aboutnLi
	$("#aboutLi").parent().click(function() {
		$(".about").css("display", "block");
		$("#h1About").css("display", "block");
		location.hash = "about";
	});

	/*help*/
	// helpLi
	$("#helpLi").parent().click(function() {
		$(".help").css("display", "block");
		$("#h1Help").css("display", "block");
		location.hash = "help";
	});

	/*hash check*/
	window.onhashchange = function() {
		var hash = location.hash;
		if (hash == "#home" || hash == "" ) {
			exit();
			$(".set,.about,.help").css("display", "none");
			$("#h1Set,#h1About,#h1Help").css("display", "none");

		}
		else if (hash == "#setting") {

		}
		//....
	}


	/*card switch*/
	var a = 0;
	$(".toggle").slideUp(0);
	$(".show-ic").data("lastClick", "1");
	$(".show-ic").data("cardSwitch", "close");

	$(".show-ic").click(function() {
		if ($(this).data("lastClick") == 1) {
			/*alert("same");*/
			$(".show-ic").removeData("lastClick");
			$(this).data("lastClick", "1");
		} else {
			/*alert("different");*/
			if ($(this).data("cardSwitch") == "close") {
				a++;
			};
			if ($(this).data("cardSwitch") == "open") {
				if (a > 1) {
					a--;
				};
			}
			$(".show-ic").removeData("lastClick");
			$(this).data("lastClick", "1");
		}
		/*if ($(this).data("cardSwitch") == "open") {alert("opened")};
		if ($(this).data("cardSwitch") == "close") {alert("closed")};*/
		a++;
		if (a > 2) {
			a = 1;
		};

		var t = 100;
		var t2 = 100; //different transition time
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (winWidth <= 380) {
			t = 0;
			t2 = 0;
		};
		$("legend").css("transition", "all " + t2 + "ms cubic-bezier(0.455, 0.03, 0.515, 0.955)");


		switch (a) {
			/*(this is ".show-ic")*/
			case 1:
				/*open*/
				$(this).data("cardSwitch", "open");
				$(this).css("transform", "rotate(180deg)");
				$(this).next().slideDown(t, 'easeInOutQuart');
				$(this).prev().css({
					"margin": "27px 0px 10px 0px",
					"font-size": "22px"
				});
				$(this).parent().parent().css("box-shadow", "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)");
				/*$(this).removeData("cardSwitch")*/
				break;
			case 2:
				/*close*/
				$(this).data("cardSwitch", "close");
				$(this).css("transform", "rotate(0deg)");
				$(this).next().slideUp(t, 'easeInOutSine');
				$(this).prev().css({
					"margin": "35px 0px 8px 0px",
					"font-size": "23px"
				});
				$(this).parent().parent().css("box-shadow", "0 1px 1.5px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24)");
				/*$(this).removeData("cardSwitch")*/
				break;
		}

	});

	//show-ic bgColor effect
	$(".show-ic").click(function() {
		$(this).css("background-color", "#F2F2F2");
		setTimeout(function() {
			$(".show-ic").css("background-color", "");
		}, 600);
	});

	/*LP*/
	if (localStorage.lp_l) {
		$(".length").val(localStorage.lp_l);
	}
	if (localStorage.lp_p) {
		$(".power").val(localStorage.lp_p);
	}

	$(".length").change(function() {
		$(".power").val(parseInt(($(".length").val() / 1.7) * ($(".length").val() / 1.7)));
		localStorage.lp_l = $(".length").val();
		localStorage.lp_p = $(".power").val();
	});

	$(".power").change(function() {
		$(".length").val(parseInt(1.7 * Math.sqrt($(".power").val())));
		localStorage.lp_l = $(".length").val();
		localStorage.lp_p = $(".power").val();
	});

	/*ZC*/
	if (localStorage.zc_fl == 60) {} else {
		/*if (localStorage.zc_fl) {$(":checked").val(localStorage.zc_fl)}*/
		if (localStorage.zc_e) {
			$("form:eq(1)").find("input:eq(2)").val(localStorage.zc_e);
		}
		if (localStorage.zc_i) {
			$("form:eq(1)").find("input:eq(3)").val(localStorage.zc_i);
		}
		if (localStorage.zc_rc) {
			$("form:eq(1)").find("input:eq(4)").val(localStorage.zc_rc);
		}
	}

	$("form:eq(1)").change(function() {
		var FL = $(":checked").val();
		var E = $("form:eq(1)").find("input:eq(2)").val();
		var I = $("form:eq(1)").find("input:eq(3)").val() / 1000;
		var Z = E / I;
		var C = 1000000 / (6.2832 * Z * FL);
		$("form:eq(1)").find("input:eq(4)").val(C.toFixed(4));
		localStorage.zc_fl = $(":checked").val();
		localStorage.zc_e = $("form:eq(1)").find("input:eq(2)").val();
		localStorage.zc_i = $("form:eq(1)").find("input:eq(3)").val();
		localStorage.zc_rc = $("form:eq(1)").find("input:eq(4)").val();
	});

	/*LC*/
	if (localStorage.lc_l) {
		$(".l").val(localStorage.lc_l);
	}
	if (localStorage.lc_c) {
		$(".c").val(localStorage.lc_c);
	}
	if (localStorage.lc_f) {
		$(".f").val(localStorage.lc_f);
	}

	$(".l").change(function() {
		var l = $(".l").val();
		var c = $(".c").val();
		var f = $(".f").val();
		var f_re = 1 / (6.28318 * Math.sqrt(l * c));
		$(".f").val(f_re.toFixed(3));
		localStorage.lc_l = $(".l").val();
		localStorage.lc_c = $(".c").val();
		localStorage.lc_f = $(".f").val();
	});
	$(".c").change(function() {
		var l = $(".l").val();
		var c = $(".c").val();
		var f = $(".f").val();
		var f_re = 1 / (6.28318 * Math.sqrt(l * c));
		$(".f").val(f_re.toFixed(3));
		localStorage.lc_l = $(".l").val();
		localStorage.lc_c = $(".c").val();
		localStorage.lc_f = $(".f").val();
	});

	/*NC*/
	if (localStorage.nc_ic) {
		$(".iC").val(localStorage.nc_ic);
	}
	if (localStorage.nc_iv) {
		$(".iV").val(localStorage.nc_iv);
	}
	if (localStorage.nc_ix) {
		$(".iX").val(localStorage.nc_ix);
	}
	if (localStorage.nc_iy) {
		$(".iY").val(localStorage.nc_iy);
	}
	if (localStorage.nc_cNum) {
		$(".C-num").val(localStorage.nc_cNum);
	}
	if (localStorage.nc_reC) {
		$(".re-C").val(localStorage.nc_reC);
	}
	if (localStorage.nc_reV) {
		$(".re-V").val(localStorage.nc_reV);
	}

	$(".NC>form>.toggle>input").change(function() {
		iC = $(".iC").val();
		iV = $(".iV").val();
		iX = $(".iX").val();
		iY = $(".iY").val();
		$(".C-num").val(iX * iY);
		$(".re-C").val(((iC / iX) * iY).toFixed(4));
		$(".re-V").val(iV * iX);
		localStorage.nc_ic = iC;
		localStorage.nc_iv = iV;
		localStorage.nc_ix = iX;
		localStorage.nc_iy = iY;
		localStorage.nc_cNum = $(".C-num").val();
		localStorage.nc_reC = $(".re-C").val();
		localStorage.nc_reV = $(".re-V").val();
	});

	/*CC*/
	if (localStorage.cc_un) {
		$(".UN").children(":selected").val(localStorage.cc_un);
	}
	if (localStorage.cc_dc) {
		$(".DC").children(":selected").val(localStorage.cc_dc);
	}
	if (localStorage.cc_n) {
		$(".N").val(localStorage.cc_n);
	}
	if (localStorage.cc_d) {
		$(".D").val(localStorage.cc_d);
	}
	if (localStorage.cc_l) {
		$(".L").val(localStorage.cc_l);
	}
	if (localStorage.cc_w) {
		$(".W").val(localStorage.cc_w);
	}
	if (localStorage.cc_c) {
		$(".C").val(localStorage.cc_c);
	}

	$(".CC>form>.toggle>input").change(function() {
		u = $(".UN").children(":selected").val();
		d = $(".D").val() * u;
		a = ($(".L").val() * u) * (($(".W").val() * u));
		n = $(".N").val();
		dc = $(".DC").children(":selected").val();
		c = ((8.85e-12 * dc * a) / d) * (n - 1);
		c *= 1e+12;
		c = parseInt(c) / 1e+6;
		$(".C").val(c);
		localStorage.cc_un = u;
		localStorage.cc_dc = dc;
		localStorage.cc_n = n;
		localStorage.cc_d = $(".D").val();
		localStorage.cc_l = $(".L").val();
		localStorage.cc_w = $(".W").val();
		localStorage.cc_c = $(".C").val();
	});

/*for aligh card*/
/*LL*/
	if (localStorage.ll_d) {
		$(".llD").val(localStorage.ll_d);
	}
	if (localStorage.ll_n) {
		$(".llN").val(localStorage.ll_n);
	}
	if (localStorage.ll_w) {
		$(".llW").val(localStorage.ll_w);
	}
	if (localStorage.ll_s) {
		$(".llS").val(localStorage.ll_s);
	}
	if (localStorage.ll_h) {
		$(".llH").val(localStorage.ll_h);
	}
	if (localStorage.ll_lo) {
		$(".llLo").val(localStorage.ll_lo);
	}
	if (localStorage.ll_l) {
		$(".llL").val(localStorage.ll_l);
	}
	if (localStorage.ll_c) {
		$(".llC").val(localStorage.ll_c);
	}

	$(".LL>form>.toggle>input").change(function() {
		llD = $(".llD").val()*1;
		llN = $(".llN").val()*1;
		llW = $(".llW").val()*1;
		llS = $(".llS").val()*1;
		llH = $(".llH").val()*1;
		llLo = $(".llLo").val()*1;
		llL = $(".llL").val()*1;
		llH = (llW + llS) * llN;
		llH = llH * 1e+3;
    llH = parseInt(llH);
    llH = llH / 1e+3;/*console.log(llH)*/
    $(".llH").val(llH);
    llR = (llD / 2 )/1000;/*unit[mm >> m]*/
		llLo = 2 * Math.PI * llR * llN;
		$(".llLo").val(llLo.toFixed(3));
		llL = ((llN * llN * llR * 2 * llR * 2) / ((36 * llR) + (40 * llH / 1000) )) * (0.000001 / 0.0254) * 1000000;
		$(".llL").val(llL.toFixed(3));
		u = 25.4;
		llC = 5.08 * llR * 1000 / u * (0.0563 * ((llH / u) / (llR *1000 / u)) + 0.08 + 0.38 * Math.sqrt(1 / ((llH / u) / (llR * 1000 / u))));
		/*console.log("u="+u,"h="+llH,"r="+llR)*/
		llC = llC * 1e+3;
		llC = parseInt(llC);
		llC = llC / 1e+3;
		$(".llC").val(llC.toFixed(3));

		localStorage.ll_d = $(".llD").val();
		localStorage.ll_n = $(".llN").val();
		localStorage.ll_w = $(".llW").val();
		localStorage.ll_s = $(".llS").val();
		localStorage.ll_h = $(".llH").val();
		localStorage.ll_lo = $(".llLo").val();
		localStorage.ll_l = $(".llL").val();
		localStorage.ll_c = $(".llC").val();
	});

/*for aligh card*/
	var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var pad2 = (winWidth - 632) / 2;
	var pad3 = (winWidth - 948) / 2;

	if (winWidth > 632) {
		$(".home").css("padding-left", pad2);
	};
	if (winWidth > 948) {
		$(".home").css("padding-left", pad3);
	};

	//resize
	$(window).resize(function() {
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var pad2 = (winWidth - 632) / 2;
		var pad3 = (winWidth - 948) / 2;
		if (winWidth >= 632 /*  && winWidth > 380*/ ) {
			$(".home").css("padding-left", pad2);
		};
		if (winWidth >= 948 /* && winWidth > 380*/ ) {
			$(".home").css("padding-left", pad3);
		};
	});

	/*may lead to bug
	$(window).resize(function() {
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (winWidth <= 640 && winWidth >= 620) {
			setTimeout(function() {
				window.location.reload()
			}, 500)
		};
	});*/

	if (winWidth >= 380) {
		if (winWidth <= 632) {
			cLeft1 = (winWidth - 316) / 2;
			$(".home").css("padding-left", cLeft1);
			$(window).resize(function() {
				var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				cLeft2 = (winWidth - 316) / 2;
				$(".home").css("padding-left", cLeft2);
			});
			$(".card").css("margin", "0px 8px 15px 8px");
		};
	}

	if (winWidth >= 320) {
		if (winWidth < 380) {
			cLeft = (winWidth - 320) / 2;
			$(".home").css("padding-left", cLeft);
		};
		$(".LP").css({
			//"margin-top": "40px"
		});
		$(".h1").css({
			"top": "20px"
		});
	};

	/*for different screen size*/
	var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if (winWidth <= 380) {
		$(".top-bg").css({
			"height": "60px",
		});
		$(".top").css({
			"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
		});
		$("h1").css({
			"font-size": "22px",
			"top": "18px",
			"left": 290 - winWidth + "px",
			"font-size": "20px",
		});
		$(".card").css({
			"width": "100%",
			"margin": "5px 0px 5px 0px",
			"border-radius": "0",
		});
		$(".img-title").css({
			"top": "-55px",
		});
		$(".LP").css({
			"margin-top": "50px"
		});
		$(".card > img:first-child").css("border-radius", "0");
	};

	/*differnt system \ device*/
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
		//for Android
		//$("h1").css("top", "14px")
	};

	/*test*/
	if (system.win || system.mac) {
		$(window).resize(function() {
			var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			if (winWidth <= 640 && winWidth >= 620) {
				setTimeout(function() {
					window.location.reload();
				}, 500);
			};
		});
	}
});
