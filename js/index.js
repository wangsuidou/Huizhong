/**
 * Created by Administrator on 15-8-18.
 */

/*
 $('.nav li').mouseenter(function(){
 $(this).find('dl').show();
 });

 $('.nav li').mouseleave(function(){
 $(this).find('dl').hide();
 });*/
/*导航*/
$('.nav li,.nav dl dd').each(function(){
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


/*flash*/
$('.flash').mouseenter(function(){
    $('.leftBtn,.rightBtn').show();
    window.clearInterval(autoDo);
});
$('.flash').mouseleave(function(){
    $('.leftBtn,.rightBtn').hide();
    autoDo=window.setInterval(function(){$('.rightBtn').click();},2000);
})

$('.flash_span span').mouseenter(function(){
    var newPos=$(this).index();
    var oldPos=$('.flash_btn_cur').index();
    if($('.flash_span span').eq(newPos).hasClass('flash_btn_cur')){
        return;
    }
    else{
        fade(newPos,oldPos);
    }
})

function fade(newPos,oldPos){
    //alert();
    //alert(newPos);
    //alert(oldPos);
    $('.flash_content li').stop(false,true);
    $('.flash_span span').eq(newPos).addClass('flash_btn_cur');
    $('.flash_span span').eq(oldPos).removeClass('flash_btn_cur');

    $('.flash_content li').eq(newPos).fadeIn();
    $('.flash_content li').eq(oldPos).fadeOut();

}

$('.leftBtn').click(function(){
    var oldPos=$('.flash_btn_cur').index();
    var newPos=oldPos==0?-1:oldPos-1;
    fade(newPos,oldPos);

})

$('.rightBtn').click(function(){
    var oldPos=$('.flash_btn_cur').index();
    var lastPos=$('.flash_span span').length-1;
    var newPos=oldPos==lastPos?0:oldPos+1;
    fade(newPos,oldPos);

})

var autoDo=window.setInterval(function(){$('.rightBtn').click();},2000);


/*main_info*/


$('.main_info li').mouseenter(function(){
    var oldPos=$('.main_info_current').index();
    var newPos=$(this).index();
    if($('.main_info li').eq(newPos).hasClass('main_info_current')){
        return;
    }
    else{
         $('.main_info li').eq(newPos).addClass('main_info_current');
        $('.main_info li').eq(oldPos).removeClass('main_info_current');
        var newPosition=-((newPos+4)*161+40)+'px';
        var oldPosition=-(oldPos)*161+'px';

        $('.main_info li').eq(newPos).children('a').css('background-position','0 '+newPosition);
        $('.main_info li').eq(oldPos).children('a').css('background-position','0 '+oldPosition);
        $('.main_info li').eq(newPos).children('div').show();
        $('.main_info li').eq(oldPos).children('div').hide();
    }
})

/*main_about*/
/*left*/
$('.main_about_left').mouseenter(function(){

    $(this).find('span').stop().animate({bottom:'0px'},500)
    $(this).find('img').stop().animate({'width':'490px','marginRight':'-20px','marginTop':'-10px'},500)

})

$('.main_about_left').mouseleave(function(){
    $(this).find('span').stop().animate({bottom:'-244px'},300)
    $(this).find('img').stop().animate({'width':'550px','marginRight':'0','marginTop':'0'},500)

})

/*right*/
$('.main_about_btn1').click(function(){
        var firstLi=$('.main_about_list li:first');
        $('.main_about_list').append(firstLi);
})
$('.main_about_btn2').click(function(){
        var lastLi=$('.main_about_list li:last');
        $('.main_about_list').prepend(lastLi);
})


$('.main_about_btn1,.main_coop_btn1').bind({
    mouseenter:function(){
        //alert();
        $(this).css({"backgroundPosition":"-61px -608px"});
    },
     mouseleave:function(){
        //alert();
        $(this).css({"background-position":"-61px -639px"});
    }
})
$('.main_about_btn2,.main_coop_btn2').bind({
    mouseenter:function(){
        $(this).css({'background-position':'-30px -639px'});
    },
    mouseleave:function(){
        $(this).css({'background-position':'-30px -608px'})
    }
})
$('.main_coop_btn1').click(function(){
    //$('.main_coop_img li').stop();
    $('.main_coop_img li:last').css({marginLeft:'-201px'});
    $('.main_coop_img li:last').prependTo('.main_coop_img');
    $('.main_coop_img li:first').animate({marginLeft:'0px'},300);
})

$('.main_coop_btn2').click(function(){
    //$('.main_coop_img li').stop();
    $('.main_coop_img li:first').animate({marginLeft:"-200px"},300,function(){
        $(this).appendTo('.main_coop_img');
        $(this).css({marginLeft:'0px'});
    })
})


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




