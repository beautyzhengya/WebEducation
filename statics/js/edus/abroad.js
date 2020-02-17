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

    //鐢宠璇曠敤鎸夐挳
    $('.header-right,#moquu_wmaps,#ab1-btn').click(function(){
        window.location.href = "http://edus.keweisoft.com#smark";
    });
	/*搴旂敤浠峰€奸€夐」鍗�*/
	$('.tab-head').find('.head-item').hover(function(){
		var num = $(this).index()/2;
		$(this).addClass('head-item-active').siblings('.head-item').removeClass('head-item-active');
		$('.tab-sub').find('.tab-sub-item').eq(num).show().siblings('.tab-sub-item').hide();
	});
	//渚ц竟鏍忓鑸�
	$(".menu-product-all").hover(function(){
		$(this).find('.menu-product-wrap').show();
	},function(){
		$(this).find('.menu-product-wrap').hide();
	});
	$(window).scroll(function(){
        var top = $(document).scrollTop();          //瀹氫箟鍙橀噺锛岃幏鍙栨粴鍔ㄦ潯鐨勯珮搴�
        var menu = $("#menu");                      //瀹氫箟鍙橀噺锛屾姄鍙�#menu
        var subMenu = $("#product-list");
        var items = $('body').find(".block");    //瀹氫箟鍙橀噺锛屾煡鎵�.item
        var subItems = $('body').find(".pro-block");

        var curId = ""; 
        var subCurId = "";                            //瀹氫箟鍙橀噺锛屽綋鍓嶆墍鍦ㄧ殑妤煎眰item #id 
        if(top > 710) {
            menu.fadeIn();
        }else{
            menu.fadeOut();
        }
        items.each(function(){
            var m = $(this);                        //瀹氫箟鍙橀噺锛岃幏鍙栧綋鍓嶇被
            var itemsTop = m.offset().top;        //瀹氫箟鍙橀噺锛岃幏鍙栧綋鍓嶇被鐨則op鍋忕Щ閲�
            if(top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });
        subItems.each(function(){
        	var m = $(this);                        //瀹氫箟鍙橀噺锛岃幏鍙栧綋鍓嶇被
            var itemsTop = m.offset().top;        //瀹氫箟鍙橀噺锛岃幏鍙栧綋鍓嶇被鐨則op鍋忕Щ閲�
            if(top > itemsTop-100){
                subCurId = "#" + m.attr("id");
            }else{
                return false;
            }
        });

        //缁欑浉搴旂殑妤煎眰璁剧疆cur,鍙栨秷鍏朵粬妤煎眰鐨刢ur
        var curLink = menu.find(".menu-cur");
        var subCurLink = subMenu.find(".link-cur") ? subMenu.find(".link-cur") : subMenu.find('a')[0]; 
        if( curId && curLink.find('a').attr("href") != curId ){
            curLink.removeClass("menu-cur");
            menu.find( "[href=" + curId + "]" ).parent('li').addClass("menu-cur");
        }
        if(subCurId && subCurLink.attr("href") != subCurId){
        	subCurLink.removeClass('link-cur');
        	subMenu.find( "[href=" + subCurId + "]" ).addClass('link-cur');
        }
        // console.log(top);
    });
})