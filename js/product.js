/**
 * Created by Administrator on 15-8-20.
 */

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

/*product_nav*/
/*$('.product_nav').find('li').mouseenter(function () {
    if($(this).hasClass('product_nav_cur'))
        return;
    else{
        $(this).addClass('product_nav_cur');
    }
})
$('.product_nav').find('li').mouseleave(function () {
        if($(this).index()===0)
            return;
        $(this).removeClass('product_nav_cur');
})

$('.product_nav').find('li').click(function(){
    if($(this).hasClass('product_nav_cur'))
         return;
    else{
        var oldPos=$('.product_nav_cur').index();
        //alert(oldPos);
        $(this).addClass('product_nav_cur');
        $('.product_nav').find('li').eq(oldPos).removeClass('product_nav_cur');
    }
})*/


/*图片特效*/
$('.product_list ul').isotope({
    itemSelector: '.product_list li'
});
$('.product_nav').find('li').click(function(){
    /*    if($(this).hasClass('product_nav_cur'))
     return;
     else{
     var oldPos=$('.product_nav_cur').index();
     //alert(oldPos);
     $(this).addClass('product_nav_cur');
     $('.product_nav').find('li').eq(oldPos).removeClass('product_nav_cur');
     }*/
    $(this).addClass('product_nav_cur').siblings('li').removeClass('product_nav_cur');
    var dataValue=$(this).attr('data');
    //alert(dataValue);
    $('.product_list ul').isotope({
        itemSelector: '.product_list li',
        filter:dataValue
    });
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