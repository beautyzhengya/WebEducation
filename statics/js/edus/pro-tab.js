/****tab閫夐」鍗�****/
  $(function(){
        $(".tab-list li").mouseover(function(){
        $(".tab-list li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
        $(".tab-con1").hide().eq($(this).index()).show();
       //鍙︿竴绉嶆柟娉�:
		$("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 
        });
    })