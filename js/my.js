
/*jQuery*/
$(function(){
  var ink, d, x, y;
  $(".ripplelink").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
});


        $(document).ready(function () {
            var isMenuOpen = false;

            $('.menu_btn').click(function () {
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
            $('#grey_back').click(function () {
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
    

     