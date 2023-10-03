/*
(1) 스크롤의 양
    scrollTop()
(2) 화면상단에서의 거리     
    offset.top()
*/

$(function () {
    var wind = $(window),
        header= $('.page-header'),
        headerOffsetTop = header.offset().top;

    wind.scroll(function(){
        //스크롤의 양 > 화면상단에서의 거리 
        if($(this).scrollTop() >= headerOffsetTop){
            header.addClass('sticky');
        }else{
            header.removeClass('sticky');
        }
    });
});
