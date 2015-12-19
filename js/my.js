//以380px为断电自适应

/*闭包*/
$(document).ready(function() {
	/*清除localStorage*/
	function clearLocalStorage() {
		localStorage.clear();
	}
});

/*顶栏动画*/
$(document).ready(function() {
	$(document).bind("scroll", function() {
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var top = $(window).scrollTop();
		console.log(top)
		var topH = $(".top").css("height"); /*top高度*/
		var top_h = topH.substring(0, 2);
		var top_shadow = 210 - top_h;

		if (winWidth >= 380) {
			if ($(window).scrollTop() >= top_shadow || $("#back").css("display") == "block") {
				$(".top").css({
					"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
					/*"top": "210px",*/
				})
			} else {
				$(".top").css({
					"box-shadow": "",
					/*"top": "210px",*/
				})
			}
			h1Size = (3 / 2500) * top * top - (11 / 50) * top + 40; /*60/(top/60)*/
			h1Top = (-9 / 20) * top + 50;
			if (h1Size <= 26) {
				h1Size = 26
			};
			if (h1Size >= 40) {
				h1Size = 40
			};
			if (top >= 100) {
				h1Size = 26
			};
			/*var winWidth0 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			if (winWidth0<=480) {if(h1Top<=7) {h1Top=7};}
			else {if(h1Top<=11) {h1Top=11};}*/
			if (h1Top <= 11) {
				h1Top = 11
			};

			$("h1").css({
				"font-size": h1Size + "px"
			});
			$("h1").css({
				"top": h1Top + "px"
			});
		};
	});
});

/*界面逻辑*/
$(document).ready(function() {
	$("#back").hide();

	/*第二界面*/
	$("#moreList").find("*").click(function() {
		$(".card").hide();
		$("h1").fadeOut(400);
		$("#back").show();
		$("#moreIc").hide();

		if (top <= 10) {
			$(".top-bg").animate({
				height: '60px'
			}, 450, 'easeInOutCubic')
		} else {
			$(".top-bg").animate({
				height: '60px'
			}, 10)
		}

		if ($("#back").css("display") == "block") {
			$(".top").css({
				"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
			})
		};
	});

	/*退出第二界面*/
	$("#back").click(function() {
		/*浪费了= =*/
		/*$(".card").show();
		$("h1").fadeIn(400);
		$("#back").hide();
		$("#moreIc").show();
		var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (winWidth >= 380) {
			$(".top-bg").animate({
				height: '210px'
			}, 450, 'easeInOutCubic');
		}
		else{
			$(".top").css({
				"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
			})
		}

		if ($("#back").css("display") == "none") {
			$(".top").css({
				"box-shadow": "",
			})
		};

		var top = $(window).scrollTop();
		console.log(top)
		var topH = $(".top").css("height"); 
		var top_h = topH.substring(0, 2);
		var top_shadow = 210 - top_h;

		if ($(window).scrollTop() >= top_shadow || $("#back").css("display") == "block") {
			$(".top").css({
				"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
			})
		}*/
		window.location.reload();
	});
});

/*顶栏选项*/
$(document).ready(function() {
	$("#moreList").hide();
	$("#blank").hide();

	$("#moreIc").click(function() {
		$("#moreList").show();
		$("#blank").show();
	});
	$("#moreList").find("*").click(function() {
		$("#moreList").hide();
		$("#blank").hide();
	});

	$("#blank").mousedown(function() {
		$(this).hide();
		$("#moreList").hide();
	});

	$(document).bind("scroll", function() {
		$("#blank").hide();
		$("#moreList").hide();
	});

	$("#QA").parent().click(function() {
		/*! CHANGYAN2.5 2015-12-18 */
		! function() {
			var a = function() {
					void 0 === window.changyan && (window.changyan = {}, window.changyan.api = {}, window.changyan.api.config = function(a) {
						window.changyan.api.tmpIsvPageConfig = a
					}, window.changyan.api.ready = function(a) {
						window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [], window.changyan.api.tmpHandles.push(a)
					})
				},
				b = function() {
					var a = function(a, b) {
							var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement,
								d = document.createElement("script");
							d.setAttribute("type", "text/javascript"), d.setAttribute("charset", "UTF-8"), d.setAttribute("src", a), "function" == typeof b && (window.attachEvent ? d.onreadystatechange = function() {
								var a = d.readyState;
								("loaded" === a || "complete" === a) && (d.onreadystatechange = null, b())
							} : d.onload = b), c.appendChild(d)
						},
						b = +new Date + "-" + window.Math.random(),
						c = "https:" == window.document.location.protocol ? "https://" : "http://",
						d = c + "changyan.sohu.com/upload/version.js?" + b;
					a(d)
				};
			a(), b()
		}();
           
		window.changyan.api.config({
			appid: 'cys7Xh1Ma',
			conf: 'prod_89b60d1b2330787417e1b7db22466b5c'
		});

		setTimeout(function() {
			$("#SOHUCS").animate({
				marginTop: '50px'
			})
		}, 4000) /*依网络情况而定。。后期改进*/

	})

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
	$(".show-ic").data("lastClick", "1");
	$(".show-ic").data("cardSwitch", "close")

	$(".show-ic").click(function() {
		if ($(this).data("lastClick") == 1) {
			/*alert("相同");*/
			$(".show-ic").removeData("lastClick");
			$(this).data("lastClick", "1");
		} else {
			/*alert("不同");*/
			if ($(this).data("cardSwitch") == "close") {
				a++
			};
			if ($(this).data("cardSwitch") == "open") {
				if (a > 1) {
					a--
				};
			}
			$(".show-ic").removeData("lastClick");
			$(this).data("lastClick", "1");
		}
		/*if ($(this).data("cardSwitch") == "open") {alert("opened")};
		if ($(this).data("cardSwitch") == "close") {alert("closed")};*/
		a++;
		if (a > 2) {
			a = 1
		};
		switch (a) {
			/*(this为.show-ic)*/
			case 1:
				/*open*/
				$(this).data("cardSwitch", "open")
				$(this).css("transform", "rotate(180deg)");
				$(this).next().slideDown(350, 'easeInOutQuart');
				$(this).prev().css({
					"margin": "27px 0px 10px 0px",
					"font-size": "22px"
				});
				$(this).parent().parent().css("box-shadow", "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23)");
				/*$(this).removeData("cardSwitch")*/
				break;
			case 2:
				/*close*/
				$(this).data("cardSwitch", "close")
				$(this).css("transform", "rotate(0deg)");
				$(this).next().slideUp(350, 'easeInOutSine');
				$(this).prev().css({
					"margin": "35px 0px 8px 0px",
					"font-size": "23px"
				});
				$(this).parent().parent().css("box-shadow", "0 1px 1.5px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24)");
				/*$(this).removeData("cardSwitch")*/
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

/*LP计算*/
$(document).ready(function() {
	if (localStorage.lp_l) {
		$(".length").val(localStorage.lp_l)
	}
	if (localStorage.lp_p) {
		$(".power").val(localStorage.lp_p)
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
});

/*ZC计算*/
$(document).ready(function() {
	if (localStorage.zc_fl == 60) {} else {
		/*if (localStorage.zc_fl) {$(":checked").val(localStorage.zc_fl)}*/
		if (localStorage.zc_e) {
			$("form:eq(1)").find("input:eq(2)").val(localStorage.zc_e)
		}
		if (localStorage.zc_i) {
			$("form:eq(1)").find("input:eq(3)").val(localStorage.zc_i)
		}
		if (localStorage.zc_rc) {
			$("form:eq(1)").find("input:eq(4)").val(localStorage.zc_rc)
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
});

/*LC计算*/
$(document).ready(function() {
	if (localStorage.lc_l) {
		$(".l").val(localStorage.lc_l)
	}
	if (localStorage.lc_c) {
		$(".c").val(localStorage.lc_c)
	}
	if (localStorage.lc_f) {
		$(".f").val(localStorage.lc_f)
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
});

/*NC计算*/
$(document).ready(function() {
	if (localStorage.nc_ic) {
		$(".iC").val(localStorage.nc_ic)
	}
	if (localStorage.nc_iv) {
		$(".iV").val(localStorage.nc_iv)
	}
	if (localStorage.nc_ix) {
		$(".iX").val(localStorage.nc_ix)
	}
	if (localStorage.nc_iy) {
		$(".iY").val(localStorage.nc_iy)
	}
	if (localStorage.nc_cNum) {
		$(".C-num").val(localStorage.nc_cNum)
	}
	if (localStorage.nc_reC) {
		$(".re-C").val(localStorage.nc_reC)
	}
	if (localStorage.nc_reV) {
		$(".re-V").val(localStorage.nc_reV)
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
});

/*CC计算*/
$(document).ready(function() {
	if (localStorage.cc_un) {
		$(".UN").children(":selected").val(localStorage.cc_un)
	}
	if (localStorage.cc_dc) {
		$(".DC").children(":selected").val(localStorage.cc_dc)
	}
	if (localStorage.cc_n) {
		$(".N").val(localStorage.cc_n)
	}
	if (localStorage.cc_d) {
		$(".D").val(localStorage.cc_d)
	}
	if (localStorage.cc_l) {
		$(".L").val(localStorage.cc_l)
	}
	if (localStorage.cc_w) {
		$(".W").val(localStorage.cc_w)
	}
	if (localStorage.cc_c) {
		$(".C").val(localStorage.cc_c)
	}

	$(".CC>form>.toggle>input").change(function() {
		u = $(".UN").children(":selected").val()
		d = $(".D").val() * u
		a = ($(".L").val() * u) * (($(".W").val() * u))
		n = $(".N").val()
		dc = $(".DC").children(":selected").val()
		c = ((8.85e-12 * dc * a) / d) * (n - 1)
		c *= 1e+12
		c = parseInt(c) / 1e+6
		$(".C").val(c)
		localStorage.cc_un = u
		localStorage.cc_dc = dc
		localStorage.cc_n = n
		localStorage.cc_d = $(".D").val()
		localStorage.cc_l = $(".L").val()
		localStorage.cc_w = $(".W").val()
		localStorage.cc_c = $(".C").val()
	})
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

/*自适应相关*/
$(document).ready(function() {
	var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	console.log(winWidth);

	if (winWidth <= 380) {
		$(".top-bg").css({
			"height": "60px",
		});
		$(".top").css({
			"box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 5px 0 rgba(0,0,0,0.23)",
		});
		$("h1").css({
			"font-size": "26px"
		});
		$("h1").css({
			"top": "11px"
		});
		$(".LP").css({
			"margin-top": "50px"
		});
	};
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
		$("h1").css("top", "14px")
	};
});
