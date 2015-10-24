/*nav*/
$('.nav li,.nav dd').each(function(){
    if($(this).children('.navDl').hasClass('navDl')){
        $(this).mouseenter(function(){
            if(this.nodeName=='DD'){
                $(this).children('a').addClass('navDdCur');
            }
            $(this).children('.navDl').show();
        })
        $(this).mouseleave(function(){
            if(this.nodeName=='DD'){
                $(this).children('a').removeClass('navDdCur');
            }
            $(this).children('.navDl').hide();
        })
    }
})


/*left*/
/*$('.detail_left').find('dd').mouseenter(function(){

	$(this).addClass('detail_left_cur');
})
$('.detail_left').find('dd').mouseleave(function(){
	//alert($(this).index());
	if($(this).index()==1){
		return;
	}
	else{
		$(this).removeClass('detail_left_cur');
	}
})*/

//回到顶部
$('.footerToTop,.weiboBtn4').click(function(){
    $('body,html').animate({scrollTop:'0'},500);
})
$(window).scroll(function(){
    var winH=$(window).height();//原生js中使用clientHeight;
    var scrH=$('body').scrollTop()+$('html').scrollTop();//html兼容IE和FF；body兼容chrome，safari和oprera
    //alert(winH+"  "+scrH);
    if(scrH>=winH){
        $('.footerToTop').fadeIn(200);
    }
    else{
        $('.footerToTop').fadeOut(200);
    }
})