$(document).ready(function () {
$(".1").click(function(){
  alert("Value: " + $("#test").val());
});
});

function imyeah(type){                           //计算函数 
  var result=0; 
  num1 = Number(document.jisuanqi.num1.value);   //把字符串强制转换成数字，例如“123abc”会转换成“123” 
  num2 = Number(document.jisuanqi.num2.value);  
  if(num1=="" || num2==""){return false;}        //如果没输入计算数则不执行 
  switch(type){                                  //判断要执行的计算符号 
    case 0:result=num1+num2;break; 
    case 1:result=num1-num2;break; 
    case 2:result=num1*num2;break; 
    case 3:result=num1/num2;break; 
    case 4:result=num1%num2;break; 
  } 
  document.jisuanqi.jieguo.value=result;         //显示计算结果 
  } 

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
    

     