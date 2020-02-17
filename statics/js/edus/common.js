$(function(){
	//浜岀骇瀵艰埅
	$('.header-nav>li').hover(function(){
		$(this).children('ul').stop(true,true).show();
	},function(){
		$(this).children('ul').stop(true,true).hide();
	});
    $('#pro-edus').hover(function(){
        $(this).find('.right').show();
    },function(){
        $(this).find('.right').hide();
    });
    $('#product>li').hover(function(){
        $(this).css('backgroundColor','#f7f7f7');
        $(this).find('a').css('color','#f60');
    },function(){
        $(this).css('backgroundColor','#fff');
        $(this).find('a').css('color','#343434');
    });
    //鎴愬姛妗堜緥閫夐」鍗�
    $('.case-title').find('.case-title-li').hover(function(){
        $(this).addClass('case-title-active').siblings().removeClass('case-title-active');
        $('.case-sub-all').find('.case-sub').eq($(this).index()).show().siblings('.case-sub').hide();
    });
    //妗堜緥鍔犺浇ajax
    window.first = 12;
    window.page = 1;
    $('#load-more').click(function(){
        //鑾峰彇鎬婚〉鐮�
        $.ajax({
            url : "../getAllCase.php",
            type : 'post',
            data : {},
            success : function(data){
                if(typeof(window.count) == "undefined"){
                    window.count = parseInt(data); 
                }

                if(window.page < window.count){
                    //鑾峰彇鏇村妗堜緥
                    $.ajax({
                        url : "../getMoreCase.php",
                        type : "post",
                        dataType : "json",
                        data : {
                            first : window.first,
                            key : window.key,
                            val : window.val
                        },
                        success : function(data){
                            if(data){            
                               $.each(data,function(index,content){
                                    $('.case-each').append('<li class="case-each-li"><div class="case-img"><a href="'+content.url+'" target="_blank"><img src="'+content.thumb+'" width="380" height="200"></a></div><div class="case-text"><div class="case-text-subtitle"><span>'+content.indus+'</span>|<span>'+content.scale+'</span></div><p class="case-text-title"><a href="'+content.url+'" target="_blank">'+content.title+'</a></p><p class="case-text-desc">'+content.description+'</p><hr class="case-text-hr"><p class="case-text-sub">搴旂敤妯″潡锛�'+content.func_tags+'</p></div></li>');     
                               });      
                            } 
                        }
                    }); 
                    window.first+=12;
                    window.page++;               
                }else{
                    $('#load-more').html("娌℃湁鏇村浜�");            
                }                
            }
        });  
    });
    //鎸夋潯浠剁瓫閫�
    $('.case-sub-all').find('.case-sub-li').click(function(){
        var item,key,val;
        item = $(this).find('a');
        window.key = key = $(this).parent('.case-sub').attr('data-origin');
        window.val = val = encodeURI(item.html());
        if(key == 'scale'){
            window.val = val = (item.attr('data-origin') == '鍏ㄩ儴') ? encodeURI(item.attr('data-origin')) : item.attr('data-origin');
        }
        item.css('color','#eb552d');
        $(this).siblings('.case-sub-li').find('a').css('color','#333');        
        $.ajax({
            url : "../ajaxCase.php",
            data : {
                key : key,
                val : val
            },
            dataType : 'json',
            type : 'POST',
            beforeSend : function(){
                $('.case-each').children('li').remove();
                $('.case-each').append('<li class="case-li-load"></li>');
            },
            success : function(data,response,status){
                if(data){
                    $('#load-more').html("鍔犺浇鏇村");
                    if(data.count <= 12){
                        window.count = 1;
                    }else{
                        window.count = Math.ceil(data.count/12);
                    }
                    window.page = 1;//閲嶇疆page涓巉irst
                    window.first = 12;
                    $('.case-each').children('li').remove();  //娓呴櫎涔嬪墠鐨勫厓绱�
                    $.each(data.result,function(index,content){
                        $('.case-each').append('<li class="case-each-li"><div class="case-img"><a href="'+content.url+'" target="_blank"><img src="'+content.thumb+'" width="380" height="200"></a></div><div class="case-text"><div class="case-text-subtitle"><span>'+content.indus+'</span>|<span>'+content.scale+'</span></div><p class="case-text-title"><a href="'+content.url+'" target="_blank">'+content.title+'</a></p><p class="case-text-desc">'+content.description+'</p><hr class="case-text-hr"><p class="case-text-sub">搴旂敤妯″潡锛�'+content.func_tags+'</p></div></li>');     
                    });     
                }           
            }
        });
    });
    
	//鐢宠璇曠敤鎸夐挳
	$('.header-right,#moquu_wmaps').click(function(){
		window.location.href = "http://edus.keweisoft.com#smark";
	});


    
})